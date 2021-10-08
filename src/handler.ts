import 'source-map-support/register';
import 'reflect-metadata';
import app from './app';

import { Handler } from 'aws-lambda';
import serverlessHttp from 'serverless-http';

export const handler: Handler = serverlessHttp(app);
