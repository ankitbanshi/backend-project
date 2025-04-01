import express from "express";
import AuthController from "../controllers/userController.js";

const router = express.Router();
router.post("/signup", AuthController.registration);

export default router;
