const orderResolver = {

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