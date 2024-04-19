import React, { useCallback, useEffect,useMemo,useRef,useState } from 'react'
import './_side-nav.scss'
import { useDispatch, useSelector } from 'react-redux'
import accordionSlice from '../../Redux/Accordion/accordionSlice'
import { getCategories } from '../../Redux/Category/actions'
import { addItemToProduct, filterByPrice, filterProducts } from '../../Redux/Product/productSlice'
import CategoriesContext from '../../Context/CategoriesContext'
import { objectGroup } from 'fontawesome'
import { Link, useNavigate } from 'react-router-dom'
const SideNav = ({setNumberOfProducts,showProducts,setShowProducts}) => {

    let accordionData= useSelector(state=>state.categoryReducer.categories);
    let  fetchedProductData= useSelector(state=>state.productReducer)
    let [products,setProducts] = useState();
    let [stateVar,setStateVar] = useState();
    

    //to be called on on click
    async function getItems()
    {

        //code u need to fix 
        let items =  fetch(process.env.REACT_APP_API_URL+"/getItems").then(res=>res.json());
console.log("async:items are:"+items);

//set item list here  
 
    }
     //categories,setCategories
    let [minPriceLimit,setMinPriceLimit]= useState(50);
    let [maxPriceLimit,setMaxPriceLimit]= useState(130);
  
    //let [showProductProxy,setShowProductProxy] = useState(false);

    
    const dispatch= useDispatch();

    useEffect(()=>{

         dispatch(getCategories());

         setTimeout(()=>{

          //  getItems()
         },10);

         


    },[]);


    useEffect(()=>{


        setProducts(fetchedProductData.products)

   },[fetchedProductData.status]);

   
   const [recompute,setRecompute] = useState(false);

    //objects in javascripts are structured has hashmaps
   // object[functionName]= ()
    let table= {};
   // table[functionName][value1][value2]=
   //LRU cache implementation  =>memoisation
   
    const expensiveOperation= (key)=>
   {

   if(!table[key])
   {
     //calculate the value and store it in the hash table/map
     //perform the expensive calculation
     //store it and return the stored hash value for the given key or set of keys

   }
   else
   {
    return table[key];
   }

   }

   const expensiveFetchOperation = () => {
    
    console.log("calculating the operation");
    let result = 0;
    //fetch is taking a lot of time , we are mimicking this 
    for (let i = 0; i < 1000000000; i++) {
        result += 1;

    }
    return result;
};

const expensiveFetchOperationForCallback = () => {
    
    console.log("calculating the callback operation");
    let result = 0;
    //fetch is taking a lot of time , we are mimicking this 
    for (let i = 0; i < 1000000000; i++) {
        result += 1;

    }

    console.log("callback result is:"+result);
    return result;
};


//naming is based on useSomething
//useState
//useMemo 
//useCallback
//useEffect 
//entrypoint without side effects 
/*
 react
 pure component => should not perform any side effects
 1) affecting the DOM directly
 2) if any inputs are passed to the component, it should not affect the inputs
 
   <Component prop1={parentComponent} />

*/

// Using useMemo to memoize the result based on count

//useMemo is a value pointer or reference in which the value referred to can change based on the dependencies , for tracking values
const result = useMemo(() => expensiveFetchOperation(), [recompute]);

//useCallback is a function pointer or reference in which the function referred to can change based on the dependencies
//for tracking the function
//expensiveFetchOperationForCallback
  const callbackHandler = useCallback(expensiveFetchOperationForCallback,[recompute]);


//first time, result will be called
   const [memoisedValue,setMemoisedValue] = useState(result);




 const getMemoisedValue =function()
 {
    var startTime = performance.now()

console.log("calculated value:"+result);
var endTime = performance.now()
console.log("time taken for memoised operation:");
console.log(endTime-startTime);


 }


    const filterData=(selectedCategory) =>
    {
        const payload ={selectedCategory,products};
        dispatch(filterProducts(payload))
        console.log(products);
    }


    function randomIntBetweenInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      

//      let buttonRef= useRef();
      //buttonRef.current.


let items=[0,1,2,3,4,5,6,7,8,9];
let [itemList,setItemList] = useState(items);


      const navigate =useNavigate();
  return (

   
   
    
   

    <div className='side-nav'>
    
   
        <div className='section-title'>
            <h3>Category</h3>
            <p>{stateVar}</p>
            <Link to="/cart">Navigate to cart using Link  </Link>
            <button onClick={()=>{navigate("/cart"); }}>Click to nav to cart via code </button>
         
            <p>Set number of products: <input type="number" onChange={(e)=>setNumberOfProducts(e.target.value)} />    </p>
            <button   onClick={()=>{setShowProducts(!showProducts)}}> Click to show or hide products</button>
    
            <button onClick={()=>{ setStateVar(20)}}>Click me</button>
            <button onClick={()=>{setRecompute(!recompute);getMemoisedValue();}}>Click to recompute value with  toggling </button>
            <button onClick={()=>{getMemoisedValue();}}>Click to recompute value without  toggling </button>
            <button onClick={callbackHandler}> Click for callback Handler</button>
            <button onClick={callbackHandler}> Click for callback Handler 2</button>
        
            <p>Memoised value is:{memoisedValue}</p>

             
           
            <button onClick={()=>{dispatch(addItemToProduct({"id":randomIntBetweenInterval(20,100),"product_name":"Torn Tshirt","category_id":7,"product_img":"shop-9.jpg","price":20,"created_on":"2023-10-26 17:02:07"}))}}>Add New Product</button>
            
        </div>


        <div className='accordion my-3'>

  <button>  Todo for homework! Change items data using api </button>

        <ul>

        {itemList.map((eachData)=>{

           
              return   <li> {eachData}</li>

          
       
        })}

</ul>


        {accordionData.map((eachData)=>{

if(eachData.parent_category_id==null)
 return(
         <div className='accordion-item individual-category'>
          <div className="accordion-header">
            <button id={"but"+eachData.category} className="accordion-button" data-bs-target={'#'+eachData.category} data-bs-toggle="collapse">
            <div className='category-title'>
                {eachData.category}
            </div>
            </button>
            </div>

            {           (accordionData.filter((eachSubCategory)=>eachData.id==eachSubCategory.parent_category_id).length>0) && <div className='accordion-collapse collapse show' id={eachData.category}>

                <div className='accordion-body'>
             
                 <ul>
              {
            
              accordionData.filter((eachSubCategory)=>eachData.id==eachSubCategory.parent_category_id).map((eachItem)=>{

          return <li className='sub-items'><a href='#' onClick={()=>{filterData(eachItem)}}>{eachItem.category}</a></li>
            
              })}
            



                 </ul>



                </div>
            </div>}

            </div> 

        )



        })}
           {/*
            <div className='accordion-item'>
            <div className='category-title'>
                Women
            </div>
            </div>
            <div className='accordion-item'>
            <div className='category-title'>
                Kids
            </div>
            </div>
           */}



        </div>
        <div className="price-filter-container">
         <div className='section-title '>

            <h3> Filter by Price </h3>

         </div>
         <div>
            <label> Min: {minPriceLimit} </label>

            <input type="range"
            className='form-range'
            onChange={(e)=>{setMinPriceLimit(e.target.value)}}
        
            value={minPriceLimit}
            min={10}
            max={130}
            step={10} />

            </div> 
            <div>
             <label> Max: {maxPriceLimit} </label>
            <input type="range"
            min={10}
            value={maxPriceLimit}
          
            onChange={(e)=>{setMaxPriceLimit(e.target.value)}}
            className='form-range'
       
            max={130}
            step={10} />
            </div>
            <div>
            <button className='btn btn-outline-dark  my-3' onClick={()=>{dispatch(filterByPrice({products:products, minPrice:minPriceLimit,maxPrice:maxPriceLimit}))}}> Apply Filter</button>
           

         </div>

 
               </div>
               {value => <p> The watches are  { value } </p>}
 

           
            
    </div>
   
    
  )
}

export default SideNav;