import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import express from 'express';
import './controllers';

let inversifyServer: InversifyExpressServer = null;
const rootContainer = new Container();

const initApplication = (): express.Application => {
    inversifyServer = new InversifyExpressServer(rootContainer);
    return inversifyServer.build();
};

export { initApplication, inversifyServer, rootContainer };
