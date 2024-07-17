import express, {Request, Response} from 'express';

const connection = require('../../../Model/dbConnected');

const updateImage = async (req:Request | any, res:Response) => {
    const imageid:string = req.params.imageid;

    // here apply validation //
    if(!imageid){
        return res.json({Error: "imageid is required"})
    }
    if(!req.file){
        return res.json({Error: "image is required"})
    }
    // console.log(req.file)

    //////==========  validation end ===========////////////

    const data:string[] = [
        req.file.location,
        req.body.description,
        req.body.color,
    ]

    // here also apply validation //
    const fields:string[] = ['image', 'description', 'color'];
    for(let i=0; i<fields.length; i++){
        if(!data[i]){
            return res.json({Error: `${fields[i]} is required`})
        }
    }

    // ========== validation end ===============//

    console.log(data)

    const sqlQuery = ` UPDATE tbl_retailer_product_images SET image=?, description=?, color=? WHERE imageid=?`
    await connection.query(sqlQuery, [...data, imageid], (err:any, result:any)=>{
        if(err) return res.json({Status: false, Error: err.sqlMessage, error: "Query Error"})
        else return res.json({Satus: true, Messge: "Image updated successfully", result})
    })
    
}

module.exports = {updateImage}