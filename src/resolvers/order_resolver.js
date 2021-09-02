const orderResolver = {
    Query: {

        orderAll: (_, {}, { dataSources, userIdToken }) => //{return dataSources.ordersAPI.orderAll()}
            {
                if (userIdToken)
                    return dataSources.ordersAPI.orderAll()
                else
                    return null
            }
    },


    Mutation: {
        orderAdd: (_, { orderAdd }, { dataSources, userIdToken }) => {
            if (userIdToken)
                return dataSources.ordersAPI.orderAdd(orderAdd)
            else
                return null
        },
    }

};

module.exports = orderResolver;