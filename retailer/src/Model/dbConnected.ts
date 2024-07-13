const mysql = require('mysql');

const connection:any = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    port:"3306",
    database:"ecommerce"
})
connection.connect((err:any,result:any)=>{
   if(err){
    console.log(err.sqlMessage)
   }
   else{
    console.log("Database Connected")
   }
})
module.exports = connection
