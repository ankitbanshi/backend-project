import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password cannot contain 'password'");
      }
    },
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

// Generate JWT token
userSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign({ _id: this._id.toString() }, "thesecretcode");
  this.tokens = this.tokens.concat({ token });
  await this.save();
  return token;
};
userSchema.statics.findByCredentials = async(email,password)=>{
     const user = await User.findOne({email});
     if(!user){
      throw new error ('unable to signin')
     }
     const isMatch =await bcrypt.compare(password,user.password);
     if(!isMatch){
      throw new error('Unable to sign in');
     }
     return user;
}

const User = mongoose.model("User", userSchema);
export default User;
