import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { errorHandler } from './middleware/errorHandling';
import rateLimit from 'express-rate-limit';

const app = express();

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, 
    max: 100 
  });
  
  app.use(limiter);

app.use(morgan('tiny'));
app.use(cors());
app.use(helmet());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message);
});

app.use(errorHandler)
export default app;
