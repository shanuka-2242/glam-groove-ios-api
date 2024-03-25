const express = require('express')
const app = express()
const mongoose = require('mongoose')
const ProductInfoModel = require('./models/productDataModel')
const CartItemInfoModel = require('./models/cartItemDataModel')
const port = 5000
app.use(express.json())

//DB Connect
mongoose.connect('mongodb+srv://root:root@webapi.fgpmolr.mongodb.net/web-api-project?retryWrites=true&w=majority&appName=WEBAPI')
.then(() => {
    console.log('connected to MongoDB')
    //app.listen(5000, () => {console.log("Server started on port 5000");})
    app.listen(process.env.PORT || port, () => console.log(`Listning on port ${port}`))
}).catch((error) => {
    console.log(error)
})


//Insert Product
app.post("/insertProduct", async(req, res) => {
    try 
    {
        const productInfos = await ProductInfoModel.create(req.body)
        res.status(200).json(productInfos);
        console.log(productInfos)
    } 
    catch (error) 
    {
        console.log(error)
        res.status(500).json({message: error.message});
    }
})

//Get Product
app.get("/getProductInfo", async (req, res) => {
    try 
    {
        const productInfos = await ProductInfoModel.find({});
        console.log(productInfos);
        res.send(productInfos);
    } 
    catch (err) 
    {
        res.status(500).json({ error: err.message });
    }
});

//Insert Cart Item
app.post("/insertCartItem", async(req, res) => {
    try 
    {
        const cartItemInfos = await CartItemInfoModel.create(req.body)
        res.status(200).json(cartItemInfos);
        console.log(cartItemInfos)
    } 
    catch (error) 
    {
        console.log(error)
        res.status(500).json({message: error.message});
    }
})

//Get Cart Item
app.get("/getCartItemInfo", async (req, res) => {
    try 
    {
        const cartItemInfos = await CartItemInfoModel.find({});
        console.log(cartItemInfos);
        res.send(cartItemInfos);
    } 
    catch (err) 
    {
        res.status(500).json({ error: err.message });
    }
});