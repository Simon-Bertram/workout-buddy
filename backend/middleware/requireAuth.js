import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const requireAuth = async (req, res, next) => {

  // Verify if the user is logged in
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Authorisation token required.' });
  }

  // Get the token from the header (authorization)
  const token = authorization.replace('Bearer ', '');

  try {
    const {_id} = jwt.verify(token, process.env.JWT_SECRET) 
    
    req.user = await User.findById(_id, { _id: 1 });
    
    next();
    
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired. Please log in again.' });
    } else if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Invalid token. Please log in again.' });
    } else {
      console.error(error); // Log for debugging
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

export default requireAuth;