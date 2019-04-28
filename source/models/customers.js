// Core
import bcrypt from 'bcrypt';
import dg from 'debug';

// Instruments
import { customers } from '../odm';

const debug = dg('router:customers');

export class Customers {
    constructor(data) {
        this.data = data;
    }

    async create() {

        const { password } = this.data;
        const hashedPassword = await bcrypt.hash(password, 11);

        const customersData = {
            ...this.data,
            password: hashedPassword,
        };

        const data = await customers.create(customersData);

        return data;
    }

    async find() {
        const data = await customers.find().lean();

        return data;
    }

    async findByHash() {
        const { hash } = this.data;
        const data = await customers
            .findOne({ hash })
            .lean();

        return data;
    }

    async update() {
        const { hash, payload } = this.data;
        const data = await customers
            .findOneAndUpdate(
                { hash },
                { ...payload },
                { new: true }
            )
            .lean();

        return data;
    }

    async delete() {
        const { hash } = this.data;
        await customers.findOneAndDelete({ hash });

        return true;
    }
}
