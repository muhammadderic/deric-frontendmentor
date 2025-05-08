export interface Product {
  id?: string | number;
  title: string;
  currentPrice: number;
  beforePrice: number;
  discount: number;
  src: string;
  quantity?: number;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
  id: string | number;
}

export interface ProductState {
  cart: CartItem | null;
  productData: Omit<Product, 'quantity'>;
}

export type ProductAction = 
  | { type: 'ADD_PRODUCT'; payload: CartItem }
  | { type: 'REMOVE_PRODUCT' }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string | number; quantity: number } };

export interface ProductContextType {
  state: ProductState;
  dispatch: React.Dispatch<ProductAction>;
}