const mongoose = require('mongoose')

const itemInfoSchema = mongoose.Schema(
    {
        itemId: {
            type: String
        },
        itemName: {
            type: String
        },
        itemPrice: {
            type: String
        },
        itemImage: {
            type: String
        },
        quantity: {
            type: String
        },
        selectedSize: {
            type: String
        },
    })

const orderInfoSchema = mongoose.Schema({
    orderId: {
        type: String
    },
    totalPrice: {
        type: String
    },
    items: [itemInfoSchema] 
});

const OrderInfoModel = mongoose.model('orderinfos', orderInfoSchema);

module.exports = OrderInfoModel;