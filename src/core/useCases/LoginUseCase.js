
class LoginUseCase {
    constructor(authService) {
      this.authService = authService;
    }
  
    async execute(email, password) {
      return await this.authService.login(email, password);
    }
  }
  
  module.exports = LoginUseCase;
  