import express from "express";

const ImagesRouter = express.Router();

const upload = require('../../Routes/RetailerRoutes/multaerImage.ts')

const {addImage} = require('../../Controller/ProductImages/addImage/addImage');

ImagesRouter.post("/addimage", upload.single('image'),  addImage)

module.exports = ImagesRouter
