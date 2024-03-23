const mongoose = require('mongoose')

const productInfoSchema = mongoose.Schema(
    {
        productId: {
            type: String
        },
        catagoryName: {
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
        productDescription: {
            type: String
        },
        availableSizes: {
            type: String
        },
        ratings: {
            type: String
        },
    })

const ProductInfoModel = mongoose.model('productinfos', productInfoSchema);

module.exports = ProductInfoModel;