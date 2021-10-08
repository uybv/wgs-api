import { Container } from "inversify";
import { LoggerMiddleware } from "./logger.middleware";

const middlewares = (container: Container) => {
    container.bind<LoggerMiddleware>(LoggerMiddleware);
};

export default middlewares;
