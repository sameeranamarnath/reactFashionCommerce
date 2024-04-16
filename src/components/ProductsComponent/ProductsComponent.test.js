import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Products from './ProductsComponent';
import { getProducts } from '../../Redux/Product/actions';
import { addCartItem } from '../../Redux/Cart/cartSlice';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { addItemToProduct } from '../../Redux/Product/productSlice';
import { store } from '../../Redux/store';
describe('Products', () => {
  let store;

  /*
  beforeEach
  beforeAll 

  afterAll 
  afterEach 4


  Simulate the e2e testing in an accurate way 
  without changing the fundamental code 

  */
  beforeEach(() => {

    
    

    store = createStore((state) => state, {
      productReducer: {
        products: [
          {
            id: 1,
            product_name: 'Torn Tshirt',
            category_id: 7,
            product_img: 'shop-1.jpg',
            price: 115,
            created_on: '2023-10-26 17:02:07',
          },
          {
            id: 2,
            product_name: 'Torn Pullover',
            category_id: 7,
            product_img: 'shop-2.jpg',
            price: 135,
            created_on: '2023-10-26 17:02:07',
          },
        ],
      },
      cartReducer: {
        cart: [],
      },
    
    
    });

    
  });


  // data-testid =

  //getByText, getAllByText 
  //what method is used in javascript  for matching? 
  // regular expressions, string matching or are we using something else 
  //xpath  => expression

  //*[@id="root"]/div/div[3]/div/div/div[1]/div/div[1]/button[2]


  it('should render without crashing', () => {
    const { getByText,getAllByText, getByTestId } = render(
          <>
          
           <div> New element </div>
           <div> 
            
            <div>child 1</div>
            <div>child 2</div>

            </div>
            
           </>
    );
  //visual side of the component 
    expect(getByText('child 3')).toBeInTheDocument();

    
  
  });


  /*

  it('should render the correct number of products', () => {
    const { getByText } = render(
      <Provider store={store}>
     <Products typeOfProducts={"clothes"} numberOfProducts={10}     showProducts={true} changeMainComponentVariable={()=>{}}  />
    </Provider>
    );
    expect(getByText('Torn Tshirt')).toBeInTheDocument();
    expect(getByText('Torn Pullover')).toBeInTheDocument();



  });

  it('should render the correct product image', () => {
    const { getByAltText } = render(
      <Provider store={store}>
      <Products typeOfProducts={"clothes"} numberOfProducts={10}     showProducts={true} changeMainComponentVariable={()=>{}}  />
   </Provider>
    );
    expect(getByAltText('Torn Tshirt')).toBeInTheDocument();
    expect(getByAltText('Torn Pullover')).toBeInTheDocument();
  });

  it('should render the correct product price', () => {
    const { getByText } = render(
      <Provider store={store}>
     <Products typeOfProducts={"clothes"} numberOfProducts={10}     showProducts={true} changeMainComponentVariable={()=>{}}  />
    </Provider>
    );
    expect(getByText('$115')).toBeInTheDocument();
    expect(getByText('$135')).toBeInTheDocument();
  });

  it('should render the correct product rating', () => {
    const { getByText } = render(
      <Provider store={store}>
     <Products typeOfProducts={"clothes"} numberOfProducts={10}     showProducts={true} changeMainComponentVariable={()=>{}}  />
    </Provider>
    );
    expect(getByText('fa fa-star')).toBeInTheDocument();
    expect(getByText('fa fa-star')).toBeInTheDocument();
    expect(getByText('fa fa-star')).toBeInTheDocument();
  });

  it('should add a product to the cart', async () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
   <Products typeOfProducts={"clothes"} numberOfProducts={10}     showProducts={true} changeMainComponentVariable={()=>{}}  />
      </Provider>
    );
    fireEvent.click(getByText('Add to Cart'));
    await waitFor(() => {
      expect(getByTestId('cart-item-1')).toBeInTheDocument();
    });
  });

  */
});