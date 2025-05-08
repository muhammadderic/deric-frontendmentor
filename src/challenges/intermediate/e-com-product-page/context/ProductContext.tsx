import React, {
  createContext,
  useReducer,
  type ReactNode
} from 'react';

import type {
  ProductContextType,
  ProductState
} from '@challenges/intermediate/e-com-product-page/types';
import { ProductReducer } from '@challenges/intermediate/e-com-product-page/context';
import product1Thumbnail from '@assets/ecom-prod/images/image-product-1-thumbnail.jpg';

const initialState: ProductState = {
  cart: null,
  productData: {
    title: "Fall Limited Edition Sneakers",
    currentPrice: 125,
    beforePrice: 250,
    discount: 50,
    src: product1Thumbnail,
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
  }
};

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductContextProviderProps {
  children: ReactNode;
}

export const ProductContextProvider: React.FC<ProductContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const contextValue: ProductContextType = {
    state,
    dispatch,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = (): ProductContextType => {
  const context = React.useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProductContext must be used within a ProductContextProvider');
  }
  return context;
};