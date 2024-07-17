import express from "express";

const ImagesRouter = express.Router();

const upload = require('../../Routes/RetailerRoutes/multaerImage.ts')

const {addImage} = require('../../Controller/ProductImages/addImage/addImage');
const {viewDescription} = require('../../Controller/ProductImages/viewImage/viewImage');
const {updateImage} = require('../../Controller/ProductImages/updateImage/updateImage');

ImagesRouter.post("/addimage", upload.single('image'),  addImage)
ImagesRouter.get("/viewImage/:imageid", viewDescription)
ImagesRouter.patch("/updateImage/:imageid", upload.single('image'),  updateImage)

module.exports = ImagesRouter
