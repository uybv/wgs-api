import { injectable, inject } from "inversify";
import { controller, httpGet, BaseHttpController, interfaces } from "inversify-express-utils";
import { LoggerMiddleware } from "../../middlewares/logger.middleware";

@controller('/app/common', LoggerMiddleware)
export class CommonController extends BaseHttpController {
    @httpGet('/')
    public async index(): Promise<interfaces.IHttpActionResult> {
        return this.ok('Hello world!');
    }
}
