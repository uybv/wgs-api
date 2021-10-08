import { controller, httpGet, BaseHttpController, interfaces } from 'inversify-express-utils';

@controller('/app/common')
export class CommonController extends BaseHttpController {
    @httpGet('/')
    public async index(): Promise<interfaces.IHttpActionResult> {
        return this.ok('Hello world!');
    }
}
