const mongoose = require('mongoose')

const orderInfoSchema = mongoose.Schema(
    {
        orderId: {
            type: String
        },
        productId: {
            type: String
        },
        productName: {
            type: String
        },
        productPrice: {
            type: String
        },
        productImage: {
            type: String
        },
        quantity: {
            type: String
        },
        selectedSize: {
            type: String
        },
    })

const OrderInfoModel = mongoose.model('orderinfos', orderInfoSchema);

module.exports = OrderInfoModel;