import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CardTwo = () => {
  return (
    <>
      <div className="w-full bg-white shadow-sm lg:px-10 lg:py-5 p-6 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="lg:w-3/5">
            <span className="text-base lg:text-lg">
              Products and Quick Delivery
            </span>
            <h2 className="font-serif text-lg lg:text-2xl font-bold mb-1">
              Schnelle Lieferung nach{' '}
              <span className="text-emerald-500">deine Wohnort Adresse</span>
            </h2>
            <p className="text-sm font-sans leading-6">
              Es gibt viele Produkte, die Sie in unserem Shop finden. Wählen Sie täglich Ihre aus
              notwendiges Produkt aus unserem Supermarkt und holen Sie sich etwas Besonderes
              Angebot. Sehen Sie sich hier unsere neuesten reduzierten Produkte an und erhalten Sie eine
              Sonderrabatt.
            </p>
            <Link href="#downloadApp">
              <a className="lg:w-1/4 text-xs font-serif font-medium inline-block mt-5 px-8 py-3 bg-emerald-500 text-center text-white rounded-full hover:text-white hover:bg-emerald-600">
               Lade App herunter
              </a>
            </Link>
          </div>
          <div className="w-1/5 flex-grow hidden lg:flex md:flex md:justify-items-center lg:justify-end">
            <Image
              width={373}
              height={250}
              src="/cta/delivery-boy.png"
              alt="app download"
              className="block w-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTwo;
