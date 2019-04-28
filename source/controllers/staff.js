
import dg from 'debug';

// Instruments
import { Staff as StaffModel } from '../models';

const debug = dg('router:staff');

export class Staff {
    constructor(data) {
        this.models = {
            staff: new StaffModel(data),
        };
    }

    async login() {
        debug('from login');
        const data = await this.models.staff.login();

        return data;
    }

    async create() {
        const data = await this.models.staff.create();

        return data;
    }

    async find() {
        const data = await this.models.staff.find();

        return data;
    }
}
