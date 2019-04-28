// Core
import dg from 'debug';
import { base } from '../odm/base';
import bcrypt from "bcrypt";

const debug = dg('router:staff');

export class Login {
    constructor(data) {
        this.data = data;
    }

    async login() {
        const { email, password } = this.data;
        const { hash, password: userPassword, __t } = await base
            .findOne({ 'emails.email': email })
            .select('password hash __t')
            .lean();

        //console.log(JSON.stringify(data, null, 4));

        const match = await bcrypt.compare(password, userPassword);

        if (!match) {
            throw new Error('Credentials are not valid');
        }


        return { hash, __t };
    }
}
