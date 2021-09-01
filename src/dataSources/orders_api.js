const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class OrdersAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.ordersApiUrl;
    }

    async orderAdd(orderAdd) {
        return await this.post(`/api/v1/order`, orderAdd);
    }


}

module.exports = OrdersAPI;