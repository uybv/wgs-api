import { injectable } from "inversify";
import { BaseMiddleware } from "inversify-express-utils";
import express from 'express';

@injectable()
export class LoggerMiddleware extends BaseMiddleware {
    public handler(req: express.Request, res: express.Response, next: express.NextFunction) {
        console.log(req.url);
        next();
    }
}
