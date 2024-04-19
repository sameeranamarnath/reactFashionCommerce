import React from 'react';

import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Products from './ProductsComponent' 
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { store } from '../../Redux/store';
import productSlice from '../../Redux/Product/productSlice';
import categorySlice from '../../Redux/Category/categorySlice';
import cartSlice from '../../Redux/Cart/cartSlice';
import { setupServer } from 'msw/node'
import { handlers } from '../../mocks/mswtest';
describe('ProductComponent', () => {

  
const server = setupServer(handlers)

// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())
  it('should render the correct product details', async () => {
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    await waitFor(() => expect(store.dispatch).toHaveBeenCalledTimes(1));
    expect(getByText('Torn T-shirt')).toBeInTheDocument();
    expect(getByAltText('Torn T-shirt')).toBeInTheDocument();
    expect(getByText('MRP: $115')).toBeInTheDocument();
    expect(getByText('Inclusive of all taxes')).toBeInTheDocument();
    expect(getByText('product description')).toBeInTheDocument();
  });

  it('should add a product to the cart', async () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    // Assuming the "Add to Cart" button has the text "Add to Cart"
    fireEvent.click(getByText('Add to Cart'));

    // Wait for the cart slice to update after dispatching the addCartItem action
    await waitFor(() => expect(store.getState().cartReducer.cart.length).toBeGreaterThan(0));

    // Assuming the product name is displayed within the cart item
    expect(getByText('Torn T-shirt')).toBeInTheDocument(); // Update with the actual product name displayed
  });
});