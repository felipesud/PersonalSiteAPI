import { Request, Response } from 'express';

class AuthController {
  async register(req: Request, res: Response): Promise<void> {
    // Lógica para registrar um usuário (chamada ao serviço AuthService)
    // Captura os dados do corpo da requisição e chama a função do AuthService correspondente
  }

  async login(req: Request, res: Response): Promise<void> {
    // Lógica para fazer login (chamada ao serviço AuthService)
    // Captura os dados do corpo da requisição e chama a função do AuthService correspondente
  }
}

export default new AuthController();
