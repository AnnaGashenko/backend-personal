import { Customers as CustomersModel } from '../models';

export class Customers {
    constructor(data) {
        this.models = {
            customers: new CustomersModel(data),
        };
    }

    async create() {
        const data = await this.models.customers.create();

        return data;
    }

    async find() {
        const data = await this.models.customers.find();

        return data;
    }

    async findByHash() {
        const data = await this.models.customers.findByHash();

        return data;
    }

    async update() {
        const data = await this.models.customers.update();

        return data;
    }

    async delete() {
        const data = await this.models.customers.delete();

        return data;
    }
}
