import React, { useState } from 'react'
import SideNav from '../SideNav'
import Products from '../ProductsComponent/ProductsComponent'


//violation of separation of concerns
//redux, mobx,context
function MainComponent() {

  //prop drilling + state in the main component =>to manage component usage
  let [showProducts,setShowProducts] = useState(false);
  let [accText,setAccText] = useState('');
  let [deeText,setDccText] = useState('');
  let [newVar,setNewVar] = useState(0);
  let [cartCount,setCartCount] =useState(0);
  let [numberOfProducts,setNumberOfProducts] = useState(10);
  //numberOfProducts.initialValue
  
  


  let setMainComponentVariable= function(valueOfNewVar)
  {


    console.log("Setting the value of state variable new Var to:",valueOfNewVar);
      setNewVar(valueOfNewVar);
  }
   
  return (
    <div className='container-fluid'>
  
  <div className='row'>
      <div className='col-lg-2 col-md-3 col-sm-4'>
    
    <p> value of newVar in main component:{newVar}</p>
    <button onClick={()=>{setShowProducts(!showProducts)}}> Click to show or hide products</button>
    <button onClick={()=>{setAccText('acc')}}> ACC</button>
    <button onClick={()=>{setDccText('dee')}}> DCC</button>
    <SideNav  setNumberOfProducts={setNumberOfProducts} />
    


    </div>
    <div className='col-lg-10 col-md-9 col-sm-8'>
    <Products typeOfProducts={"clothes"} numberOfProducts={numberOfProducts}  accText={accText}  deeText={deeText}  showProducts={showProducts} changeMainComponentVariable={setMainComponentVariable}  />
    </div>
    

    </div>
    </div>

  )
}

export default MainComponent