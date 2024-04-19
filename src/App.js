import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react'
import CategoriesContext from './Context/CategoriesContext';

// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import {Routes,Route} from 'react-router-dom';

import TopNav from './components/TopNav/TopNav';
import CatNav from './components/CatNav/CatNav';
import MainComponent from './components/MainComponent/MainComponent';
import LandingPage from './components/LandingPage';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import SideNav from './components/SideNav';


// import your icons
function App() {

  class ErrorBoundary extends React.Component {

    //useState where state is for the class component's state
    state = {
      hasError: false
      
    };
  
    //change the state over here
    static getDerivedStateFromError(error) {
      return {
        hasError: true,
        error
        
      };
    }
  
  
    //do something with the error
    componentDidCatch(error, info) {
  
      
      //this.state.error= error; 
    
      console.log("Error caused is:"+error, info);
    }
  
  
    //render conditionally based on the error
    render() {
      if (this.state.hasError) {
        return <h1>An error has occurred:{this.state.error && this.state.error.message}.</h1>;
        
      }
      //else
      return this.props.children ;
    }
  }
  

  let [cartCount,setCartCount ] =useState(0);
  library.add(fab, fas, far)


  
  
  return  (
    <div className='App'>
<TopNav  />
<CatNav />
<Routes>
<Route path="/cart" element={<Cart />} />
  
  <Route path="/" element={<LandingPage  />} />
  <Route path="/productdetails" element={<ProductDetails />} />
  <Route path="/sidenavigation" element={<SideNav />} />
  
</Routes>
  </div>
  );

}

export default App;
