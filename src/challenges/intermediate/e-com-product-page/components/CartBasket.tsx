import React from 'react';
import { useProductContext } from '@challenges/intermediate/e-com-product-page/context';

interface CartBasketProps {
  onDeleteItem?: () => void;
}

export const CartBasket: React.FC<CartBasketProps> = ({ onDeleteItem }) => {
  const { state, dispatch } = useProductContext();
  if (!state) return;
  const cartItem = state.cart;

  const handleDeleteItem = (): void => {
    dispatch({ type: "REMOVE_PRODUCT" });
    if (onDeleteItem) {
      onDeleteItem();
    }
  };

  if (!cartItem) {
    return (
      <div className="w-[300px] bg-white absolute rounded-2xl shadow-[rgba(0,0,0,0.24)_0px_3px_8px] top-[120px] right-[-100px] -translate-x-1/2 -translate-y-1/2">
        <p className="m-0 p-4 font-bold border-b border-[hsl(220,14%,75%)]">Cart</p>
        <div className="h-[150px] flex justify-center items-center">
          <p className="text-[hsl(219,9%,45%)]">Your cart is empty</p>
        </div>
      </div>
    );
  }

  const totalPrice = cartItem.currentPrice * cartItem.quantity;

  return (
    <div className="w-[300px] bg-white absolute rounded-2xl shadow-[rgba(0,0,0,0.24)_0px_3px_8px] top-[120px] right-[-100px] -translate-x-1/2 -translate-y-1/2">
      <p className="m-0 p-4 font-bold border-b border-[hsl(220,14%,75%)]">Cart</p>
      <div className="p-4 flex flex-col justify-center items-center">
        <div className="flex mb-2 w-full items-center">
          <img
            src={cartItem.src}
            alt={cartItem.title}
            className="w-[50px] h-[50px] rounded-lg object-cover"
          />
          <div className="px-2 flex-1">
            <p className="m-0 text-sm text-[hsl(219,9%,45%)]">{cartItem.title}</p>
            <p className="m-0 text-sm text-[hsl(219,9%,45%)]">
              ${cartItem.currentPrice.toFixed(2)} x {cartItem.quantity}{' '}
              <span className="font-bold text-[hsl(220,13%,18%)]">
                ${totalPrice.toFixed(2)}
              </span>
            </p>
          </div>
          <div className="flex justify-center items-center">
            <svg
              onClick={handleDeleteItem}
              className="cursor-pointer hover:opacity-75 transition-opacity"
              width="14"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-label="Delete item"
            >
              <defs>
                <path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a" />
              </defs>
              <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
            </svg>
          </div>
        </div>
        <button className="w-full mt-4 py-3 bg-[hsl(26,100%,55%)] text-white rounded-lg font-bold hover:bg-[hsl(26,100%,45%)] transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
};