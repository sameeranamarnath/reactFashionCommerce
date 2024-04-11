

import { createAsyncThunk } from "@reduxjs/toolkit";



export const getCategories= createAsyncThunk(
'getCategories',

()=>{

    //const categories=["Men","Women","Kids","Best offers","All"];

   const categories= fetch(process.env.REACT_APP_API_URL+"/productcategories").then(res=>res.json());
console.log("got cat data:"+JSON.stringify(categories));
let categoriesJSON=[{"id":1,"category":"Men","parent_category_id":null,"created_on":"2023-10-26  12:55:27"},{"id":2,"category":"Casual Wear","parent_category_id":1,"created_on":"2023-10-26 13:45:53"},{"id":3,"category":"Accessories","parent_category_id":5,"created_on":"2023-10-28 12:39:47"},{"id":4,"category":"Women","parent_category_id":null,"created_on":"2023-10-26 15:48:45"},{"id":5,"category":"Kids","parent_category_id":null,"created_on":"2023-10-26 15:48:45"},{"id":6,"category":"Party wear","parent_category_id":4,"created_on":"2023-10-26 16:50:34"},{"id":7,"category":"Foot wear","parent_category_id":4,"created_on":"2023-10-26 16:50:34"},{"id":8,"category":"Accessories","parent_category_id":4,"created_on":"2023-10-26 16:51:30"}];

 return categories;
}

);
