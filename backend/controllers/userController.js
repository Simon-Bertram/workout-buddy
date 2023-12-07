import User from "../models/userModel.js"

// Login user
// /api/users/login
// POST
// Public
const loginUser = (req, res) => {
  res.send("Login Route");
};

// Register user
// /api/users
// POST
// Public
const registerUser = (req, res) => {
  res.send("Register Route");
};

// Get user profile
// /api/users/profile
// GET
// Private
const getUserProfile = (req, res) => {
  res.send("Profile Route");
};

export { loginUser, registerUser, getUserProfile };