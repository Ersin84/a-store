import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-xl">
            <span className="text-emerald-600 font-bold">
              100% Beste Qualität
            </span>{' '}
             2022
          </h1>

          <p className="text-gray-500">
            Sehen Sie sich hier unsere neuesten reduzierten Produkte an und erhalten Sie ein Sonderangebot
            <Link href="#discount">
              <a className="text-emerald-600 ml-1">discount product</a>
            </Link>
          </p>
        </div>
        <Link href="/search?Category=organic-food">
          <a className="text-sm font-serif font-medium px-6 py-2 bg-emerald-500 text-center rounded-full text-white hover:bg-emerald-700">
            Shop Now
          </a>
        </Link>
      </div>
    </>
  );
};

export default Banner;
