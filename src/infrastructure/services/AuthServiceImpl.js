const AuthService = require('../../core/ports/AuthService');
const User = require('../../core/domain/User');

class AuthServiceImpl extends AuthService {
  constructor() {
    super();
  }

  async login(email, password) {
    if (email === "test@example.com" && password === "password") {
      const user = new User(1, email, "dummy-token");
      return user;
    }
    return null;
  }

  async register(userData) {
    const user = new User(2, userData.email, "dummy-token");
    return user;
  }
}

module.exports = AuthServiceImpl;
