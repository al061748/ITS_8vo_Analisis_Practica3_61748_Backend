const express = require('express');
const router = express.Router();

const LoginUseCase = require('../../core/useCases/LoginUseCase');
const AuthServiceImpl = require('../services/AuthServiceImpl');

// Endpoint para login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const authService = new AuthServiceImpl();
    const loginUseCase = new LoginUseCase(authService);
    const user = await loginUseCase.execute(email, password);
    if (user) {
      res.json({ token: user.token, email: user.email });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Endpoint para registro
router.post('/register', async (req, res) => {
  const userData = req.body;
  try {
    const authService = new AuthServiceImpl();
    // Aquí podrías crear un caso de uso separado para el registro si deseas mayor abstracción
    const user = await authService.register(userData);
    res.status(201).json({ token: user.token, email: user.email });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
