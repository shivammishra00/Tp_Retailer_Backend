import express from 'express';
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const cors = require('cors')
const cookieParser = require('cookie-parser');


const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002"],
    credentials: true,
    method: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
}));
app.use(cookieParser())


const port = process.env.PORT || 5000;

////////==============  Api me restfull route diya  ============///////
const retailerRouter = require('./Routes/RetailerRoutes/RetailerRoute.ts')
const verifyRouter = require('./Routes/RetailerRoutes/verifyRoute.ts')
const productRouter = require('./Routes/ProductRoutes/productRoutes.ts')
const bankingRouter = require('./Routes/BankingRoutes/bankimgRoutes.ts')
const descriptionRouter = require('./Routes/ProductDescriptionRoutes/descriptionRoutes.ts')
app.use("/api/retailer", retailerRouter)
app.use("/api/retailer", verifyRouter)
app.use("/api/retailer/product", productRouter)
app.use("/api/retailer/banking", bankingRouter)
app.use("/api/retailer/productDescription", descriptionRouter)

app.listen(port, ()=>{
    console.log(`server is running on ${port} port`)
})