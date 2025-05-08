import React, { useState } from 'react';

import { CartBasket } from '@challenges/intermediate/e-com-product-page/components';

import logo from '@assets/ecom-prod/images/logo.svg';
import iconCart from '@assets/ecom-prod/images/icon-cart.svg';
import userAvatar from '@assets/ecom-prod/images/image-avatar.png';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const openMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openCartModal = () => {
    setIsOpenCart(!isOpenCart);
  }

  return (
    <div className="w-[1440px] max-w-full mx-auto">
      <div className="w-[80%] mx-auto">
        {/* Navbar */}
        <div className="flex justify-between border-b border-[hsl(220,14%,75%)]">
          {/* Left Section */}
          <div className="h-[75px] flex items-center">
            {/* Hamburger Button */}
            <button
              onClick={openMenu}
              className="mr-4 p-1 flex items-center bg-white border-none z-[999] cursor-pointer md:hidden"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-[70px] h-[70px] ${isMenuOpen ? 'hidden' : 'block'}`}
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 6l16 0"></path>
                <path d="M4 12l16 0"></path>
                <path d="M4 18l16 0"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-[70px] h-[70px] ${isMenuOpen ? 'block' : 'hidden'}`}
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M18 6l-12 12"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            </button>

            {/* Logo */}
            <img
              src={logo}
              alt="company logo"
              className="h-5 w-auto mr-4"
            />

            {/* Desktop Menu */}
            <ul className="hidden md:flex m-0 list-none">
              <li className="mr-4 py-[75px]">
                <a
                  href="/"
                  className="text-[hsl(219,9%,45%)] no-underline py-[25px] hover:border-b-2 hover:border-[hsl(26,100%,55%)] transition-colors"
                >
                  Collections
                </a>
              </li>
              <li className="mr-4 py-[75px]">
                <a
                  href="/"
                  className="text-[hsl(219,9%,45%)] no-underline py-[25px] hover:border-b-2 hover:border-[hsl(26,100%,55%)] transition-colors"
                >
                  Men
                </a>
              </li>
              <li className="mr-4 py-[75px]">
                <a
                  href="/"
                  className="text-[hsl(219,9%,45%)] no-underline py-[25px] hover:border-b-2 hover:border-[hsl(26,100%,55%)] transition-colors"
                >
                  Women
                </a>
              </li>
              <li className="mr-4 py-[75px]">
                <a
                  href="/"
                  className="text-[hsl(219,9%,45%)] no-underline py-[25px] hover:border-b-2 hover:border-[hsl(26,100%,55%)] transition-colors"
                >
                  About
                </a>
              </li>
              <li className="mr-4 py-[75px]">
                <a
                  href="/"
                  className="text-[hsl(219,9%,45%)] no-underline py-[25px] hover:border-b-2 hover:border-[hsl(26,100%,55%)] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex items-center">
            <img
              onClick={openCartModal}
              src={iconCart}
              alt="cart icon to store the items you want to buy"
              className="h-[1.2rem] cursor-pointer"
            />
            <img
              src={userAvatar}
              alt="user avatar"
              className="h-[2.3rem] ml-10 rounded-full cursor-pointer box-border hover:border-2 hover:border-[hsl(26,100%,55%)] transition-all"
            />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            } md:hidden`}
          onClick={openMenu}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 left-0 h-full w-[70%] max-w-sm bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } md:hidden`}
        >
          <div className="flex flex-col pt-24 pl-8 space-y-6">
            <a
              href="/"
              className="text-[hsl(219,9%,45%)] text-xl font-bold no-underline hover:text-[hsl(26,100%,55%)] transition-colors"
              onClick={openMenu}
            >
              Collections
            </a>
            <a
              href="/"
              className="text-[hsl(219,9%,45%)] text-xl font-bold no-underline hover:text-[hsl(26,100%,55%)] transition-colors"
              onClick={openMenu}
            >
              Men
            </a>
            <a
              href="/"
              className="text-[hsl(219,9%,45%)] text-xl font-bold no-underline hover:text-[hsl(26,100%,55%)] transition-colors"
              onClick={openMenu}
            >
              Women
            </a>
            <a
              href="/"
              className="text-[hsl(219,9%,45%)] text-xl font-bold no-underline hover:text-[hsl(26,100%,55%)] transition-colors"
              onClick={openMenu}
            >
              About
            </a>
            <a
              href="/"
              className="text-[hsl(219,9%,45%)] text-xl font-bold no-underline hover:text-[hsl(26,100%,55%)] transition-colors"
              onClick={openMenu}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Cart Bottom Section */}
        <div className="h-0 flex justify-end relative">
          {isOpenCart && <CartBasket />}
        </div>
      </div>
    </div>
  );
};