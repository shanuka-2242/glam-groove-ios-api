const mongoose = require('mongoose')

const cartItemInfoSchema = mongoose.Schema(
    {
        cartItemId: {
            type: String
        },
        productId: {
            type: String
        },
        cartItemName: {
            type: String
        },
        cartItemPrice: {
            type: String
        },
        cartItemImage: {
            type: String
        },
        quantity: {
            type: String
        },
        cartItemSelectedSize: {
            type: String
        },
        itemsTotalPrice: {
            type: String
        },
    })

const CartItemInfoModel = mongoose.model('cartitemsinfos', cartItemInfoSchema);

module.exports = CartItemInfoModel;