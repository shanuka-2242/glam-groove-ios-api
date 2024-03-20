const mongoose = require('mongoose')

const productInfoSchema = mongoose.Schema(
    {
        catagoryID: {
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
    })

const ProductInfoModel = mongoose.model('productinfos', productInfoSchema);

module.exports = ProductInfoModel;