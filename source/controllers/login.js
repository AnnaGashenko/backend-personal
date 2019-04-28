import dg from 'debug';

// Instruments
import { Login as LoginModel } from '../models';

const debug = dg('router:login');

export class Login {
    constructor(data) {
        console.log('CONTROLLER', JSON.stringify(data, null,4));
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
