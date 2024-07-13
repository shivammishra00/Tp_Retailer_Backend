import { Request, Response } from "express";
const bcrypt = require("bcrypt");

const salt: number = 10;

const connection = require("../../Model/dbConnected.ts");

interface DataType {
  regno: string,
  gstno: string,
  tin: string,
  pan: string,
  shopname: string,
  ownername: string,
  image: string,
  landline: string,
  mobile: string,
  weblink: string,
  email: string,
  address: string,
  country: string,
  state: string,
  city: string,
  pin: string,
  document_reg_no: string,
  document_pan_no: string,
  document_gst_no: string,
  document_shop: string,
  termscondition: string,
  aadhar: string,
  password: string,
}

const RetailerRegistration = (req: Request | any, res: Response) => {
  // console.log(req.body);
  const sqlQuery = `INSERT INTO tbl_retailer_reg SET ?`;
  bcrypt.hash(req.body.password.toString(), salt, (err: any, hash: any) => {
    if (err)
      return res.json({ Status: false, Error: "error for hasing password" });

    const data:DataType = {
      regno: req.body.regno,
      gstno: req.body.gstno,
      tin: req.body.tin,
      pan: req.body.pan,
      shopname: req.body.shopname,
      ownername: req.body.ownername,
      image: req.files?.['image']?.[0]?.location || '',
      landline: req.body.landline,
      mobile: req.body.mobile,
      weblink: req.body.weblink,
      email: req.body.email,
      address: req.body.address,
      country: req.body.country,
      state: req.body.state,
      city: req.body.city,
      pin: req.body.pin,
      document_reg_no: req.files?.['document_reg_no']?.[0]?.location || '',
      document_pan_no: req.files?.['document_pan_no']?.[0]?.location || '',
      document_gst_no: req.files?.['document_gst_no']?.[0]?.location || '',
      document_shop: req.files?.['document_shop']?.[0]?.location || '',
      termscondition: req.body.termscondition,
      aadhar: req.body.aadhar,
      password: hash,
    };
    console.log(data)
    if(!data.regno){
      return res.json({Error:"Registraion number is required"})
    }
    if(!data.gstno){
      return res.json({Error:"GST number is required"})
    }
    if(!data.tin){
      return res.json({Error:"TIN number is required"})
    }
    if(!data.pan){
      return res.json({Error:"PAN number is required"})
    }
    if(!data.shopname){
      return res.json({Error:"Shop Name is required"})
    }
    if(!data.ownername){
      return res.json({Error:"Owner Name is required"})
    }
    if(!data.image){
      return res.json({Error:"Owner Image is required"})
    }
    if(!data.landline){
      return res.json({Error:"Contact(Land Line) Number is required"})
    }
    if(!data.mobile){
      return res.json({Error:"Mobile Number is required"})
    }
    if(!data.weblink){
      return res.json({Error:"Web Link is required"})
    }
    if(!data.email){
      return res.json({Error:"Email Id is required"})
    }
    if(!data.address){
      return res.json({Error:"Address is required"})
    }
    if(!data.country){
      return res.json({Error:"Country Name is required"})
    }
    if(!data.state){
      return res.json({Error:"State Name is required"})
    }
    if(!data.city){
      return res.json({Error:"City Name is required"})
    }
    if(!data.pin){
      return res.json({Error:"Pin Code is required"})
    }
    if(!data.document_reg_no){
      return res.json({Error:"Document_reg_no is required"})
    }
    if(!data.document_gst_no){
      return res.json({Error:"Document_gst_no is required"})
    }
    if(!data.document_pan_no){
      return res.json({Error:"Document_pan_no is required"})
    }
    if(!data.document_shop){
      return res.json({Error:"Document_shop is required"})
    }
    if(!data.termscondition){
      return res.json({Error:"Terms and condition is required"})
    }
    if(!data.aadhar){
      return res.json({Error:"Aadhar Number is required"})
    }
    if(!data.password){
      return res.json({Error:"Password is required"})
    }
    connection.query(sqlQuery, [data], (err: any, result: any):any => {
      if (err)
        return res.json({
          Staus: false,
          Error: "Query error",
          error: err.sqlMessage,
        });
      else
        return res.json({
          Status: true,
          Message: "Retailer Registered Successfully",
          result,
        });
    });
  });
};

module.exports = { RetailerRegistration };
