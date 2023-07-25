import { Request, Response, NextFunction } from 'express';

//functional middleware
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`);
  next();
};

// Class middleware 
// 
// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     console.log('Request...');
//     next();
//   }
// }
