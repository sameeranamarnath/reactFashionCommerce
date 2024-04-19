import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Products from './ProductsComponent'; // Update path to your component
import { getProducts } from '../../Redux/Product/actions'; // Update path to actions
import { addCartItem } from '../../Redux/Cart/cartSlice'; // Update path to cartSlice
import { Provider,useSelector } from 'react-redux';
import { createStore } from 'redux';
import { store } from '../../Redux/store'; // Update path to rootReducer
import productSlice from '../../Redux/Product/productSlice';
import categorySlice from '../../Redux/Category/categorySlice';
import cartSlice from '../../Redux/Cart/cartSlice';
import { configureStore } from '@reduxjs/toolkit';

 
describe('Products', () => {
  let store;
    //let store;
    const initialProducts = [
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
    ];

  beforeEach(() => {
    // Initialize the store with the initial state
    store = configureStore({
      reducer: {
        category: categorySlice.reducer,
        product: productSlice.reducer,
        cart: cartSlice.reducer,
      },
    });

    

//    const store = createStore(combineReducers({ productReducer, cartReducer }));
    // Mock the getProducts function
    jest.spyOn(store.reducer.product, 'getProducts').mockImplementation(() => {
      return {
        type: 'getProducts',
        payload: initialProducts,
      };
    });

    // Mock the addItemToProduct function
    jest.spyOn(cartSlice.actions, 'addItemToProduct').mockImplementation(() => {
      return {
        type: 'addItemToProduct',
        payload: {
          id: 1,
          product_name: 'Torn T-shirt',
          category_id: 7,
          product_img: 'shop-9.jpg',
          price: 115,
          created_on: '2023-10-26 17:02:07',
        },
      };
    });

        // Mock the useSelector hook to access the state
        const useSelectorMock = jest.fn();
        useSelectorMock.mockImplementation((selector) => {
          if (selector === 'getProducts') {
            return {
              status: 'Success',
              payload: [
                {
                  id: 1,
                  product_name: 'Torn T-shirt',
                  category_id: 7,
                  product_img: 'shop-9.jpg',
                  price: 115,
                  created_on: '2023-10-26 17:02:07',
                },
              ],
            };
          }
    
          return selector(store.getState());
        });
    
        // Replace the useSelector hook with the mock implementation
        jest.spyOn(React, 'useSelector').mockImplementation(useSelectorMock);
    
  });

  /*
  it('should add a product to the cart', async () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Products typeOfProducts={'clothes'} numberOfProducts={10} showProducts={true} changeMainComponentVariable={() => {}} />
      </Provider>
    );


    fireEvent.click(getByText('Add to Cart'));
    await waitFor(() => {
      expect(getByTestId('cart-item-1')).toBeInTheDocument();
    });
  });
  */




  // No need for a separate test to check for rendering without crashing

  it('should render the correct number of products', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Products typeOfProducts="clothes" numberOfProducts={10} showProducts={true} changeMainComponentVariable={(theVar) => {console.log(theVar);}} />
      </Provider>
    );

    await waitFor(() => expect(store.dispatch).toHaveBeenCalledTimes(1));

    expect(getByText('Torn Tshirt')).toBeInTheDocument();
    expect(getByText('Torn Pullover')).toBeInTheDocument();
  });

  it('should render the correct product image', async () => {
    const { getByAltText } = render(
      <Provider store={store}>
        <Products typeOfProducts="clothes" numberOfProducts={10} showProducts={true} changeMainComponentVariable={() => {}} />
      </Provider>
    );

    await waitFor(() => expect(store.dispatch).toHaveBeenCalledTimes(1));

    expect(getByAltText('Torn Tshirt')).toBeInTheDocument();
    expect(getByAltText('Torn Pullover')).toBeInTheDocument();
  });

  it('should render the correct product price', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Products typeOfProducts="clothes" numberOfProducts={10} showProducts={true} changeMainComponentVariable={() => {}} />
      </Provider>
    );

    await waitFor(() => expect(store.dispatch).toHaveBeenCalledTimes(1));

    expect(getByText('$115')).toBeInTheDocument();
    expect(getByText('$135')).toBeInTheDocument();
  });

  it('should render the correct product rating', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Products typeOfProducts="clothes" numberOfProducts={10} showProducts={true} changeMainComponentVariable={() => {}} />
      </Provider>
    );

    await waitFor(() => expect(store.dispatch).toHaveBeenCalledTimes(1));

    // Assuming you render 3 stars
    expect(getByText('fa fa-star')).toBeInTheDocument();
    expect(getByText('fa fa-star')).toBeInTheDocument();
    expect(getByText('fa fa-star')).toBeInTheDocument();
  });

  it('should add a product to the cart', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Products typeOfProducts="clothes" numberOfProducts={10} showProducts={true} changeMainComponentVariable={() => {}} />
      </Provider>
    );
  
    // Assuming the "Add to Cart" button has the text "Add to Cart"
    fireEvent.click(getByText('Add to Cart'));
  
    // Wait for the cart slice to update after dispatching the addCartItem action
    await waitFor(() => expect(store.getState().cartReducer.cart.length).toBeGreaterThan(0));
  
    // Assuming the product name is displayed within the cart item
    expect(getByText('Torn Tshirt')).toBeInTheDocument(); // Update with the actual product name displayed
  })
  

});