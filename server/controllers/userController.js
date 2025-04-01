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
}

export default AuthController;
