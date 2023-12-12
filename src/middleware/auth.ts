import { jwt } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

function authenticateToken(req: Request, res: Response, next: NextFunction): void {
  const token = req.headers['authorization'];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, 'your_secret_key_here', (err: any, user: any) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
}

export default authenticateToken;
