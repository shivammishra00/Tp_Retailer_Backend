import express from "express";

const {addProduct} = require('../../Controller/Product/addProduct/addProduct')
const {viewProduct} = require("../../Controller/Product/viewProduct/viewProduct")
const {updatePrice, updateDiscount, updateQuantity} = require('../../Controller/Product/updateProduct/updateProduct')
const upload = require('../../Routes/RetailerRoutes/multaerImage')

const productRouter = express.Router();

productRouter.post("/addproduct", upload.single('image'), addProduct)
productRouter.get("/viewproduct", viewProduct)
productRouter.patch("/updateprice/:pid", updatePrice)
productRouter.patch("/updatediscount/:pid", updateDiscount)
productRouter.patch("/updatequantity/:pid", updateQuantity)
module.exports = productRouter