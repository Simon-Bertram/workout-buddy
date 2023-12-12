import User from "../models/userModel.js"
import validator from "validator";

// Login user
// POST /api/users/login
// Public
const loginUser = (req, res) => {
  const { email, password } = req.body
}

// Register user
// POST /api/users/register
// Public
const registerUser = async (req, res) => {
  const { email, password } = req.body
  
  // Validation
  if (!email || !password) {
    res.status(400);
    throw new Error('All fields must be filled');
  }
  if (!validator.isEmail(email)) {
    res.status(400);
    throw new Error('Invalid email');
  }
  if (!validator.isStrongPassword(password)) {
    res.status(400);
    throw new Error('Password must be at least 8 characters long, contain a lowercase, uppercase, number, and symbol');
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  try {
   // Create user
    const user = await User.create({
      email,
      password,
    }); 

    // If user is created, send back user data
    if (user) {
      res.status(201).json({
        _id: user._id,
        email: user.email,
        password: user.password,
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  } catch (error) {
    res.status(400).json({error: error.message})
  }

};

// Get user profile
// GET /api/users/profile
// Private
const getUserProfile = (req, res) => {
  res.send("Profile Route");
};

export { loginUser, registerUser, getUserProfile };