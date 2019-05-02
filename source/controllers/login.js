import dg from 'debug';

// Instruments
import { Login as LoginModel } from '../models';

const debug = dg('router:login');

export class Login {
    constructor(data) {
        this.models = {
            login: new LoginModel(data),
        };
    }

    async login() {
        debug('from controller login');
        const data = await this.models.login.login();

        return data;
    }

}
