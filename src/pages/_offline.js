import React from 'react';
import Head from 'next/head';

const Offline = () => {
  return (
    <>
      <Head>
        <title>Lieferdienst | Wien Online Market einfach Bestellen</title>
      </Head>
      <div className="px-6 py-10 lg:py-20 bg-emerald-50 h-screen flex flex-wrap content-center">
        <div className="block justify-items-stretch mx-auto items-center text-center">
          <h2 className="font-bold font-serif font-2xl lg:text-3xl leading-6 mb-4">
            Keine Internetverbindung verfügbar!
          </h2>
          <p className="block text-center text-base font-sans text-gray-600">
            Bitte verbinden Sie Ihr Netzwerk, um die Live-Version zu sehen
          </p>
        </div>
      </div>
    </>
  );
};
import ReactGA from 'react-ga';
const TRACKING_ID = "G-1FPWCHHJVM"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
export default Offline;
