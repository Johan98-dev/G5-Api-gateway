const { gql } = require('apollo-server');

const ordersTypeDefs = gql `
    type Products {
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
        products: [Products]
    }

    type Order{
        order_id: String
        detail: [Detail]
    }

    type StatusC{
        Status: String
    }

    input OrderAddInput {
        client_id: String
        pay_method: String
        products: [OrderDetailProduct]
    }

    input OrderDetailProduct{
        product_id: Int!
        amount: Int
    }



    extend type Mutation {
        orderAdd(orderAdd: OrderAddInput!): StatusC
    }

    extend type Query {
        orderAll: [Order]!
    }
    
    
`;

module.exports = ordersTypeDefs;