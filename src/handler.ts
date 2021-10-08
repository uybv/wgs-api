import { Handler } from 'aws-lambda';
import dotenv from 'dotenv';
import path from 'path';
const dotenvPath = path.join(__dirname, '../', `config/.env.${process.env.NODE_ENV}`);
dotenv.config({
  path: dotenvPath,
});

import express from 'express';
import serverlessHttp from 'serverless-http';

const app = express();
app.use(express.json());

app.get('/hello', (req: express.Request, res: express.Response) => {
  const data = {
    message: 'Hello! --> ' + Date.now.toString(),
  };
  res.json(data);
});

export const handler: Handler = serverlessHttp(app);
