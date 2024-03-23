const express= require('express');

const productCategories= express.Router()


const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db.sqlite');

productCategories.get("/",(req,res)=>{
     res.send(" api server running");
})

productCategories.get("/",(req,res)=>{


     res.send(" api server running");
})
productCategories.get('/getProducts',(req,res)=>{


     db.all(`SELECT * FROM products`, (err, products) => {


          if (err) {

               res.status(500).send(err);

          } else {

               res.status(200).send(products);

          }

     });

});

productCategories.get("/productcategories",(req,res)=>{

    let prodData={
     pName:"Jackets",
     price:45,
     img:"shop-1.jpg"
  
    }
   // db.serialize(() => {
   //    db.run(`INSERT INTO products (pName, price, img) VALUES (?,?,?)`,
   //     [prodData.pName, prodData.price, prodData.img],
   //     function(err) {
   //       if (err) {
   //         return console.log(err.message);
   //       }
   //       console.log(`Successfully inserted ${this.changes} row(s)`);
   //     });
   //  });
    //pool.getConnection((err,connection)=>{
  
      //if(err)
      //{
        //  res.status(500).send(err);
  
      //}
      //else
      {
         // res.status(200).send("connection established");
  
           db.all(`SELECT * FROM categories`, (err, categories) => {


               if (err) {

                    res.status(500).send(err);

               } else {

                    res.status(200).send(categories);

               }

           });
  
      }
   // })
    //res.status(200).send(prodData);
  
  })

  module.exports=productCategories;
