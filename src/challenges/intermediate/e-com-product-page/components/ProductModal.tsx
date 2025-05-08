import React, { useState } from 'react';
import product1 from '@assets/ecom-prod/images/image-product-1.jpg';
import product2 from '@assets/ecom-prod/images/image-product-2.jpg';
import product3 from '@assets/ecom-prod/images/image-product-3.jpg';
import product4 from '@assets/ecom-prod/images/image-product-4.jpg';
import product1Thumbnail from '@assets/ecom-prod/images/image-product-1-thumbnail.jpg';
import product2Thumbnail from '@assets/ecom-prod/images/image-product-2-thumbnail.jpg';
import product3Thumbnail from '@assets/ecom-prod/images/image-product-3-thumbnail.jpg';
import product4Thumbnail from '@assets/ecom-prod/images/image-product-4-thumbnail.jpg';

interface Photo {
  id: string;
  url: string;
  thumbnail: string;
  title?: string;
}

const photos: Photo[] = [
  {
    id: 'p1',
    url: product1,
    thumbnail: product1Thumbnail,
    title: 'Product 1',
  },
  {
    id: 'p2',
    url: product2,
    thumbnail: product2Thumbnail,
    title: 'Product 2',
  },
  {
    id: 'p3',
    url: product3,
    thumbnail: product3Thumbnail,
    title: 'Product 3',
  },
  {
    id: 'p4',
    url: product4,
    thumbnail: product4Thumbnail,
    title: 'Product 4',
  },
];

interface ProductModalProps {
  closeProductModal: (e: React.MouseEvent<HTMLDivElement | SVGSVGElement>) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ closeProductModal }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const next = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prev = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const handleThumbnailClick = (index: number): void => {
    setCurrentIndex(index);
  };

  const handleCloseClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    closeProductModal(e);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/70 z-10"
        onClick={handleCloseClick}
      />

      {/* Modal Container */}
      <div className="fixed z-20 w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Close Icon Wrapper */}
        <div className="w-full flex justify-end mb-4">
          <div
            className="cursor-pointer group"
            onClick={handleCloseClick}
            role="button"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="white"
                fillRule="evenodd"
                className="transition-colors duration-200 group-hover:fill-[hsl(26,100%,55%)]"
              />
            </svg>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative mx-auto">
          {/* Main Images */}
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`${currentIndex === index ? 'block animate-[fade_1.5s]' : 'hidden'}`}
            >
              <img
                src={photo.url}
                alt={photo.title || `Product ${index + 1}`}
                className="w-full rounded-2xl"
              />
            </div>
          ))}

          {/* Previous Button */}
          <button
            onClick={prev}
            className="absolute left-[-15px] top-1/2 -translate-y-1/2 p-4 bg-white rounded-full cursor-pointer hover:bg-white transition-all duration-200 shadow-lg group"
            aria-label="Previous image"
          >
            <svg
              width="12"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-200"
            >
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
                className="transition-colors duration-200 group-hover:stroke-[hsl(26,100%,55%)]"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={next}
            className="absolute right-[-15px] top-1/2 -translate-y-1/2 p-4 bg-white rounded-full cursor-pointer hover:bg-white transition-all duration-200 shadow-lg group"
            aria-label="Next image"
          >
            <svg
              width="13"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-200"
            >
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
                className="transition-colors duration-200 group-hover:stroke-[hsl(26,100%,55%)]"
              />
            </svg>
          </button>
        </div>

        {/* Thumbnails */}
        <div className="w-full flex cursor-pointer mt-8 gap-4">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="w-1/4"
              onClick={() => handleThumbnailClick(index)}
              role="button"
              aria-label={`View product ${index + 1}`}
            >
              <img
                src={photo.thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className={`
                  w-full rounded-2xl box-border transition-all duration-200
                  ${currentIndex === index
                    ? 'border-2 border-[hsl(26,100%,55%)] opacity-70'
                    : 'hover:opacity-70'
                  }
                `}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Add keyframes animation for fade effect */}
      <style>{`
        @keyframes fade {
          from {
            opacity: 0.4;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};