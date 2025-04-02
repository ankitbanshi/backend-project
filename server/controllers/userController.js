import User from "../models/User.js";

class AuthController {
  static registration = async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).send({
        status: "success",
        message: "User registered successfully",
        userData: user,
      });
    } catch (error) {
      res.status(400).send({
        status: "failed",
        message: error.message,
      });
    }
  };
  static signin =async (req,res)=>{
    try{
      const user =await User.findByCredentials(req.body.email,req.body.password)
      const token = await user.generateAuthToken()
      res.status(200).send({
        status:200,
        message:"User logged in Successfully",
        data:{
          userData:user,token
        }})
    }
    catch(error){
      res.status(400).send({
        status:400,
        message:error.message
      })
    }
  }
}

export default AuthController;
