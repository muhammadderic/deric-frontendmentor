import React, { useState } from 'react';

import type {
  CartItem,
  Product as ProductType
} from '@challenges/intermediate/e-com-product-page/types';
import { useProductContext } from '@challenges/intermediate/e-com-product-page/context';
import { ProductModal } from '@challenges/intermediate/e-com-product-page/components';

import product1Thumbnail from '@assets/ecom-prod/images/image-product-1-thumbnail.jpg';
import product2Thumbnail from '@assets/ecom-prod/images/image-product-2-thumbnail.jpg';
import product3Thumbnail from '@assets/ecom-prod/images/image-product-3-thumbnail.jpg';
import product4Thumbnail from '@assets/ecom-prod/images/image-product-4-thumbnail.jpg';
import product1 from '@assets/ecom-prod/images/image-product-1.jpg';
import product2 from '@assets/ecom-prod/images/image-product-2.jpg';
import product3 from '@assets/ecom-prod/images/image-product-3.jpg';
import product4 from '@assets/ecom-prod/images/image-product-4.jpg';
import iconMinus from '@assets/ecom-prod/images/icon-minus.svg';
import iconPlus from '@assets/ecom-prod/images/icon-plus.svg';

const mainImages = [product1, product2, product3, product4];
const thumbnailImages = [product1Thumbnail, product2Thumbnail, product3Thumbnail, product4Thumbnail];

const productData: Omit<ProductType, 'quantity'> = {
  title: "Fall Limited Edition Sneakers",
  currentPrice: 125,
  beforePrice: 250,
  discount: 50,
  src: product1Thumbnail
};

export function Product() {
  const [quantityProduct, setQuantityProduct] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mainImage, setMainImage] = useState<number>(0);
  const { state, dispatch } = useProductContext();

  const showProductModal = (e: React.MouseEvent<HTMLImageElement>): void => {
    e.preventDefault();
    setIsOpen(true);
  };

  const closeProductModal = (e: React.MouseEvent<HTMLDivElement | SVGSVGElement>): void => {
    e.preventDefault();
    setIsOpen(false);
  };

  const increaseQuantity = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setQuantityProduct(prev => prev + 1);
  };

  const decreaseQuantity = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setQuantityProduct(prev => prev > 0 ? prev - 1 : 0);
  };

  const addToCart = (): void => {
    // if (!state) return;
    if (state.cart === null && quantityProduct > 0) {
      const cartItem: CartItem = {
        ...productData,
        id: Date.now(),
        quantity: quantityProduct
      };

      dispatch({
        type: "ADD_PRODUCT",
        payload: cartItem
      });
    }
  };

  return (
    <div className="w-[1440px] max-w-full mx-auto">
      <div className="w-[80%] mx-auto py-12 px-4 flex flex-col md:flex-row gap-4">
        {/* Left Section - Product Images */}
        <div className="md:flex-1 md:p-12">
          <img
            src={mainImages[mainImage]} // Use imported image from array
            alt={`Product ${mainImage + 1}`}
            className="w-full rounded-2xl cursor-pointer"
            onClick={showProductModal}
          />
          <div className="w-full my-8 flex gap-4">
            {thumbnailImages.map((thumbnail, index) => (
              <img
                key={index}
                src={thumbnail} // Use imported thumbnail image
                alt={`Thumbnail ${index + 1}`}
                className={`w-[100px] rounded-2xl cursor-pointer transition-opacity ${mainImage === index
                  ? 'border-2 border-[hsl(26,100%,55%)] opacity-70'
                  : 'hover:opacity-70'
                  }`}
                onClick={() => setMainImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Right Section - Product Info */}
        <div className="md:flex-1 md:p-12 my-auto">
          <p className="uppercase font-bold tracking-[2px] text-[hsl(26,100%,55%)]">
            Sneaker Company
          </p>
          <h1 className="my-4 text-4xl md:text-5xl tracking-[2px] leading-tight md:leading-[3rem] font-bold">
            {state.productData.title}
          </h1>
          <p className="mt-12 leading-relaxed text-justify text-[hsl(219,9%,45%)] md:text-base">
            These low-profile sneakers are your perfect casual wear companion. Featuring a
            durable rubber outer sole, they'll withstand everything the weather can offer.
          </p>

          {/* Price Section */}
          <div className="my-8">
            <div className="flex items-center gap-4">
              <p className="text-2xl font-bold m-0">
                ${state.productData.currentPrice}.00
              </p>
              <p className="m-0 px-2 py-1 font-bold bg-[hsl(25,100%,94%)] text-[hsl(26,100%,55%)] rounded-md">
                {state.productData.discount}%
              </p>
            </div>
            <p className="mt-2 mb-8 font-bold text-[hsl(220,14%,75%)] line-through">
              ${state.productData.beforePrice}.00
            </p>
          </div>

          {/* Add to Cart Section */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Quantity Selector */}
            <div className="w-full sm:w-[30%] flex justify-between items-center bg-[hsl(223,64%,98%)] rounded-md">
              <div
                className="p-4 flex items-center cursor-pointer hover:opacity-70 transition-opacity"
                onClick={decreaseQuantity}
              >
                <img
                  className="w-3 h-1"
                  src={iconMinus}
                  alt="reduce shopping items"
                />
              </div>
              <p className="m-0 font-bold">{quantityProduct}</p>
              <div
                className="p-4 flex items-center cursor-pointer hover:opacity-70 transition-opacity"
                onClick={increaseQuantity}
              >
                <img
                  className="w-3 h-3"
                  src={iconPlus}
                  alt="add more shopping items"
                />
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              className="flex-1 py-4 px-8 flex justify-center items-center gap-4 font-bold bg-[hsl(26,100%,55%)] text-white rounded-md border-none cursor-pointer hover:bg-[hsl(25,100%,94%)] hover:text-[hsl(26,100%,55%)] transition-all duration-300 shadow-lg"
              onClick={addToCart}
            >
              <svg
                className="w-5 h-5"
                width="22"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="currentColor"
                  fillRule="nonzero"
                />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {isOpen && <ProductModal closeProductModal={closeProductModal} />}
    </div>
  );
}