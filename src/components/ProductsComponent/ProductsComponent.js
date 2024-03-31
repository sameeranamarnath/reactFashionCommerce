
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './_products.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../Redux/Product/actions';
import { addCartItem } from '../../Redux/Cart/cartSlice';
import { Link } from 'react-router-dom';
//variable destructuring of props
const Products = ({ typeOfProducts, showProducts, assendingOrder, changeMainComponentVariable, numberOfProducts }) => {

  //local state , global state

  //local => variables within the component and the view  =>useState 

  //global state=> Redux, global state management for memory management across
  //multiple components, ContextAPI

  //useState

  //react can track variable changes using useState mostly

  let productData = useSelector(state => state.productReducer.products);

  let cartData = useSelector(state => state.cartReducer)
  let dispatch = useDispatch();
  useEffect(() => {

    dispatch(getProducts());

    return function () {

      console.log("clean up called for product components");
      //clean all your unused data within the component

      //javascript is gc (mark and sweep)

    };

  }, [])

  const addToCart = (product) => {


    product = { ...product, quantity: 1 };
    dispatch(addCartItem(product));
  }


  let productDataNew = [];
  for (let i = 0; i < numberOfProducts; i++) {
    if (productData[i]) {
      productDataNew.push(productData[i]);
    }
  }

  
let strAscending =[];
  if(assendingOrder){
    strAscending = productDataNew.sort((a, b) =>
    a.product_name > b.product_name ? 1 : -1,

    )
  }else {
    strAscending = productDataNew
  }


  return (

    <div className='product-container'>

      <button onClick={() => changeMainComponentVariable(40)}>Change main component variable</button>


      {showProducts && strAscending.map((eachProduct, index) => {
      

        return (
          <div className='mx-5 p-3 product-card'>
            <Link to="/productdetails" state={{ product: eachProduct }} >

              <div className='product-image-container'>
                <img src={require('../../assets/images/shop/' + eachProduct.product_img)} />


              </div>

            </Link>


            <div className='product-info'>
              <h5>
                <Link to="/productdetails" state={{ product: eachProduct }} >{eachProduct.product_name}</Link>
              </h5>
              <p className='product-price'>${eachProduct.price}</p>
              <div className='product-rating'>
                <FontAwesomeIcon icon='fa fa-star' className='rating' />
                <FontAwesomeIcon icon='fa fa-star' className='rating' />
                <FontAwesomeIcon icon='fa fa-star' className='rating' />
              </div>
              <div className='my-3' onClick={() => { addToCart(eachProduct); }}>
                <div className='cart-button'>
                  <div className='cart-icon-container'>
                    <FontAwesomeIcon icon="fa fa-shopping-cart" className="mx-4 cart-icon" />
                  </div>
                  <div className='cart-text-container mx-3'>
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
