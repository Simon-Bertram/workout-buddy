import User from "../models/userModel.js"
import jwt from "jsonwebtoken";
import validator from "validator";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" })
}

// Login user
// POST /api/users/login
// Public
const loginUser = async (req, res) => {
  const { email, password } = req.body

  // Validation
  if (!email || !password) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });

  } catch (error) {
    res.status(400).json({error: error.message})
  }

  // Check if user exists
  const user = await User.findOne({ email });

  // 
  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }


}

// Register a new user
// POST /api/users/register
// Public
const registerUser = async (req, res) => {
  const { email, password } = req.body
  
  // Validation
  if (!email || !password) {
    return res.status(400).json({error: "All fields must be filled"});
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({error: "Invalid email"});
  }
  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({error: "Password must be at least 8 characters long and contain at least 1 lowercase, 1 uppercase, 1 number, and 1 symbol"});
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({error: "User already exists"});
  }

  try {
   // Create user
    const user = await User.create({
      email,
      password,
    }); 

    // If user is created, send back user data
    if (user) {
      // Create token
      const token = createToken(user._id);

      res.status(201).json({
        _id: user._id,
        email: user.email,
        token
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