const express = require('express')
const app = express()
const mongoose = require('mongoose')
const ProductInfoModel = require('./models/productDataModel')
const OrderInfoModel = require('./models/orderDataModel')
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

//Insert Order
app.post("/insertOrder", async(req, res) => {
    try 
    {
        const orderInfos = await OrderInfoModel.create(req.body)
        res.status(200).json(orderInfos);
        console.log(orderInfos)
    } 
    catch (error) 
    {
        console.log(error)
        res.status(500).json({message: error.message});
    }
})

//Get Order
app.get("/getOrderInfo", async (req, res) => {
    try 
    {
        const orderInfos = await OrderInfoModel.find({});
        console.log(orderInfos);
        res.send(orderInfos);
    } 
    catch (err) 
    {
        res.status(500).json({ error: err.message });
    }
});