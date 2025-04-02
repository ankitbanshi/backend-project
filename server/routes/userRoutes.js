import express from "express";
import AuthController from "../controllers/userController.js";

const router = express.Router();
router.post("/signup", AuthController.registration);
router.post("/signin",AuthController.signin);

export default router;
