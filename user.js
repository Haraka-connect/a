import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Example user authentication route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simple check - replace with actual user validation
  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

export default router;