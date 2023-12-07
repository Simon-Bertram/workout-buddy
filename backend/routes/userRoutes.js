import express from "express";
import {
  loginUser,
  registerUser,
  getUserProfile,
} from '../controllers/userController.js'

const router = express.Router();

// Login route
router.post("/login", (req, res) => {
  res.send("Login Route");
});

// Sign-up route
router.post("/register", (req, res) => {
  res.send("Register Route");
});

// Profile route
router.get("/profile", (req, res) => {
  res.send("Profile Route");
});

export default router;