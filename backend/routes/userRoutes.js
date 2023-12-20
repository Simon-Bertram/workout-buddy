import express from "express";
import {
  loginUser,
  registerUser,
  getUserProfile,
} from '../controllers/userController.js'

const router = express.Router();

// Login route
router.post("/login", loginUser);

// Sign-up route
router.post("/register", registerUser);

// Profile route
router.get("/profile", getUserProfile);

export default router;