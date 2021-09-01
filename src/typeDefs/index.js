//Se llama al typedef (esquema) de cada submodulo
const clientsTypeDefs = require('./clients_type_def');
const productsTypeDefs = require('./products_type_def');
const usersTypeDefs = require('./users_type_defs');
const ordersTypeDefs = require('./orders_type_def');

//Se unen
const schemasArrays = [clientsTypeDefs, productsTypeDefs, usersTypeDefs, ordersTypeDefs];

//Se exportan
module.exports = schemasArrays;