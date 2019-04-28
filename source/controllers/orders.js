import {Orders as OrdersModel} from '../models';

export class Orders {
    constructor(data) {
        this.models = {
            orders: new OrdersModel(data),
        };
    }

    async create() {
        const data = await this.models.orders.create();

        return data;
    }

    async find() {
        const data = await this.models.orders.find();

        return data;
    }

    async findByHash() {
        const data = await this.models.orders.findByHash();

        return data;
    }

    async update() {
        const data = await this.models.orders.update();

        return data;
    }

    async delete() {
        const data = await this.models.products.delete();

        return data;
    }
}
