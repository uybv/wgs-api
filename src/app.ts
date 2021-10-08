import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import { getRouteInfo } from 'inversify-express-utils';
import { initApplication, rootContainer } from './container';

const app = initApplication();
// Middleware
app.use(cors());
app.use(compression());
app.use(helmet.referrerPolicy({ policy: 'no-referrer' }));
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.hidePoweredBy());
app.use(helmet.xssFilter());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/routers', async (_request: express.Request, response: express.Response) => {
    const routeInfo = getRouteInfo(rootContainer);
    response.json(routeInfo);
});

export default app;
