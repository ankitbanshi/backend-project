const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
  name:{
    type:String,
    require:true,
    trim:true
  },
  email:{
    type:String,
    require:true,
    trim:true,
    unique:true,
    lowercase:true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error(`Email is invalid`);
      }
    }
  },
  password:{
    type:String,
    unique:true,
    require:true,
    trim:true,
    minlength: 8,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error(`Password can not contain Password`)
      }
    }
  },
  tokens: [{
    token: {
        type: String,
        required: true
    }
  }]
})
userSchema.pre('save',async function (next){
  const user =this;
  if(user.isModified('password')){
    user.password=await bcrypt.hash(user.password,8)}
    next()
})
userSchema.methods.generateAuthToken=async function(){
  const user=this;
  const token =jwt.sign({_id:user._id.toString()},'thesecretcode')
  user.token =user.token.concat({token})
  await user.save()
  return token
}
const User=mongoose.model('User',userSchema)
export default User;