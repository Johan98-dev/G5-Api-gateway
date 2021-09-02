const { gql } = require('apollo-server');

const ordersTypeDefs = gql `
    type Product {
        product_id: Int!
        amount: Int
        unit_price: Float
        iva: Float
        subtotal_price: Float
        total_price: Float
    }

    type Detail{
        client_id: String
        pay_method: String
        products: Product
    }

    type Order{
        order_id: String
        detail: Detail
    }

    type StatusC{
        Status: String
    }

    input OrderAddInput {
        order_id: String!
        detail: Detail
    }

    extend type Mutation {
        orderAdd(orderAdd: OrderAddInput!): StatusC
    }

    extend type Query {
        orderAll: [Order]!
    }
    
    
`;

module.exports = ordersTypeDefs;