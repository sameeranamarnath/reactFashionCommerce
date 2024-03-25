
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import  './_top-nav.scss'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
//import {GoogleLogin} from "react-google-login"
//import {gapi} from 'gapi-script';
const TopNav = function()
{


  const successHandler=(res)=>{

    console.log(res);
  }
  const cartItemCount= useSelector(state=>state.cartReducer.totalItems);
//console.log("count",cartItemCount);
    return(
        <div className='header bg-dark'>
        <div className='topnavrow justify-content-between d-flex'>
          <div className='brand my-1'>
            <h1> Coforge Rewards Shop </h1>
          </div>
         {/*
         
          <div className='inp-container p-0 my-4 w-50 h-25 bg-white'>
            <div className='dropdown m-0 p-0'>
              <select className='select-btn w-100 p-0 m-0' >
                <option> Men </option>
                <option> Women </option>
                <option> Kids </option>
              </select>
            </div>
            <input className='form-control   ' placeholder='Search...'/>
            <button> <FontAwesomeIcon icon='fa fa-search'/> </button>
    
          </div>
          <div className="login-container p-0">
          <FontAwesomeIcon icon="fa fa-user-circle"/>
            <h5>
              </h5>
          </div>
          */}
          <div className='cart-wishlist'>
            <ul className="p-0">
 
           
           <li className="list-icon" > <Link to="/cart" className='d-flex'> <FontAwesomeIcon icon="fa fa-shopping-cart" style={{color:"white"}}/>{cartItemCount>0 && <div className='cart-item-count'><p>{cartItemCount}</p></div>}</Link> </li>
         
            </ul>

          </div>
        
        </div>
      </div>

    )




}

export default TopNav;
