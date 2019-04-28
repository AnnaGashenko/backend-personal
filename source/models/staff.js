// Core
import bcrypt from 'bcrypt';
import dg from 'debug';

// Instruments
import { staff } from '../odm';

const debug = dg('router:staff');

export class Staff {
    constructor(data) {
        this.data = data;
    }

    async create() {
        const { password } = this.data;
        const hashedPassword = await bcrypt.hash(password, 11);

        const staffData = {
            ...this.data,
            password: hashedPassword,
        };


        debug(`staff - ${JSON.stringify(staffData)}`);
        const data = await staff.create(staffData);

        return data;
    }

    async find() {
        const data = await staff.find().lean();

        return data;
    }
}
