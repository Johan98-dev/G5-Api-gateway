const { gql } = require('apollo-server');

const ordersTypeDefs = gql `
    type Product {
        client_id: String
        pay_method: cash
    }

    type StatusC{
        Status: String
    }

    input OrderAddInput {
        client_id: String
        pay_method: cash
    }

    extend type Mutation {
        orderAdd(orderAdd: OrderAddInput!): StatusC
    }
    
`;

module.exports = ordersTypeDefs;