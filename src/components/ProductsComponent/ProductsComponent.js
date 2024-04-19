
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './_products.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../Redux/Product/actions';
import { addCartItem } from '../../Redux/Cart/cartSlice';
import { Link } from 'react-router-dom';
import { addItemToProduct } from '../../Redux/Product/productSlice';
//variable destructuring of props

const Products=({typeOfProducts,showProducts, changeMainComponentVariable,numberOfProducts})=>{

if(typeOfProducts)
{
   
}
if(showProducts)
{

}

      //local state , global state

    //local => variables within the component and the view  =>useState 

    //global state=> Redux, global state management for memory management across
     //multiple components, ContextAPI

 //useState

 //let [var1,setVar1]=useState(3);
 //var1=3;

 //react can track variable changes using useState mostly

    let productData= useSelector(state=>state.productReducer.products);
   // productData.push

    console.log(JSON.stringify(productData)+"length is:"+productData.length +":"+productData[0]);
    let cartData=useSelector(state=>state.cartReducer)
    console.log("component created:"+showProducts+":"+numberOfProducts);
    let dispatch= useDispatch();
    useEffect(()=>{

      //entry point for products component

        console.log("use effect called:"+showProducts);
         dispatch(getProducts());



         
         

        
         

         return function()
         {

           console.log("clean up called for product components");
           //clean all your unused data within the component

           //javascript is gc (mark and sweep)

                   };

    }, [] )

    const addToCart= (product)=>{

     // let productData={"id":10,"product_name":"Torn Tshirt","category_id":7,"product_img":"shop-9.jpg","price":115,"created_on":"2023-10-26 17:02:07"};
    //  dispatch(addItemToProduct(productData));


      product={...product,quantity:1};

       //  dispatch("cartSlice/addCartItem",{product});
        dispatch(addCartItem(product));
        //will be sent to the reducers from the store 
    }


    let productDataNew= [];
    for(let i=0;i<numberOfProducts;i++)
    {
      if(productData[i])
      {
      productDataNew.push(productData[i]);
      }
    }

    
    
    return(
 
        <div className='product-container'>

        <button onClick={()=>changeMainComponentVariable(40)}>Change main component variable</button>


    {showProducts &&   productDataNew.map((eachProduct,index)=>{

            
return(
  
          <div className='mx-5 p-3 product-card' key={eachProduct.id}>
<Link to="/productdetails" state={{product:eachProduct}} >
  
            <div className='product-image-container'>
                {/*  <img alt={eachProduct.product_name} src={require('../../assets/images/shop/'+  eachProduct.product_img)}/> */}
                 <img src={eachProduct.product_img} /> 
                 
                 <p> id is: {eachProduct.id}</p>


            </div>

 </Link>            
            

            <div className='product-info'>
            <h5>
                   <Link to="/productdetails" state={{product:eachProduct}} >{eachProduct.product_name}</Link>
                 </h5>
 <p className='product-price'>${eachProduct.price}</p>
              <div className='product-rating'>
                  <FontAwesomeIcon  icon='fa fa-star' className='rating' />
                  <FontAwesomeIcon  icon='fa fa-star' className='rating' />
                  <FontAwesomeIcon  icon='fa fa-star' className='rating' />
               </div>
             <div className='my-3'onClick={()=>{addToCart(eachProduct);}}>
              <div className='cart-button'>
                    <div className='cart-icon-container'>
               <FontAwesomeIcon icon="fa fa-shopping-cart" className="mx-4 cart-icon" />
                </div>
                <div data-testid="sdsds" className='cart-text-container mx-3'>
                 <p className=''>Add to Cart </p>
                </div>
              </div>
               </div>

            </div>



          </div>)
   
       })}  
        </div>


    )



}

export default Products;
