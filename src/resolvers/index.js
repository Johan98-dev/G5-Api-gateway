const clientResolver = require('./client_resolver');
const productResolver = require('./product_resolver');
const userResolver = require('./users_resolver');
const orderResolver = require('./order_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(clientResolver, productResolver, userResolver, orderResolver);

module.exports = resolvers;