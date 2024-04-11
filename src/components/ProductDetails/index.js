import React from 'react'
import "./_products-details.scss"
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../../Redux/Cart/cartSlice';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';

//element destructuring of array/object

//Props 
//props.typeOfProduct;
const ProductDetails = (   ) => {



    

    const dispatch = useDispatch();
    const location=useLocation(); //window.location 
    const product= location.state.product;
    console.log(location.state.product );

const addToCart= function()
{
    const payload= {...product,quantity:1}
    dispatch(addCartItem(payload));
}

/*
let style={


};

React=> (styled components)  =>Third party library
let divElement= div.createStyledComponent({

//css
});


*/




  return (
    <div  className='row container my-5 product-details-container'>
      
                <div className='col-5 product-img-container'>
                    {/* <img src={require('../../assets/images/shop/'+  product.product_img)}/> */}
    
                            <img src={product.product_img} />
    
                </div>

               
                <div className='product-info col-7'>
                <span className='product-name'>
          {product.product_name}
                     </span>
                  <div className='product-rating-container'>
                      <FontAwesomeIcon  icon='fa fa-star' className='ratingicon' />
                      <FontAwesomeIcon  icon='fa fa-star' className='ratingicon' />
                      <FontAwesomeIcon  icon='fa fa-star' className='ratingicon' />
                   </div>
                   <div className='product-price'>
                   MRP: <span className='price'> {product.price}</span>
                  <div style={{"font-size":"0.8em"}} >Inclusive of all taxes</div>

                   </div>

                   <div className='my-3 product-description'>
                
                   <span>product description</span>

                   </div>

                   <div className="my-5">
                        <div className="btn btn-warning cart-button" onClick={()=>{addToCart();}} >
                            <div className="cart-icon-container">
                                <FontAwesomeIcon icon="fa fa-shopping-cart" className='cart-icon'/>
                            </div>
                            <div className="cart-text-container">
                                <p> Add to Cart </p>
                            </div>
                        </div>
                    </div>
              
    
    
              </div>
               </div>)
  
}

export default ProductDetails