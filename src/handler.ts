import 'source-map-support/register';
import 'reflect-metadata';

import dotenv from 'dotenv';
import path from 'path';
const dotenvPath = path.join(__dirname, '../', `config/.env.${process.env.NODE_ENV}`);
dotenv.config({
  path: dotenvPath,
});

import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';

const app = express();
// Middleware
app.use(cors());
app.use(compression());
// app.use(helmet.referrerPolicy({policy: "no-referrer"}));
// app.use(helmet.noSniff());
// app.use(helmet.ieNoOpen());
// app.use(helmet.frameguard({action: "deny"}));
// app.use(helmet.hidePoweredBy());
// app.use(helmet.xssFilter());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import { Container } from 'inversify';
// import { getRouteInfo, InversifyExpressServer } from 'inversify-express-utils';

// const container = new Container();
// import middlewares from './middlewares';
// middlewares(container);
// import "./controllers";
// const server = new InversifyExpressServer(container, null, null, app);
// server.build();

let x = 0;

app.use('/routers', async (request: express.Request, response: express.Response) => {
//   const routeInfo = getRouteInfo(container);
//   response.json(routeInfo);
    x += 1;
    response.json({ message: 'hello', couter: x });
});

import { Handler } from 'aws-lambda';
import serverlessHttp from 'serverless-http';

export const handler: Handler = serverlessHttp(app);
