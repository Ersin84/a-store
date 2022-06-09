import React from 'react';
import {
  FiDollarSign,
  FiHome,
  FiMapPin,
  FiRepeat,
  FiShieldOff,
  FiSun,
  FiTruck,
} from 'react-icons/fi';

const Card = () => {
  return (
    <ul className="my-0">
      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start mr-4">
          <FiTruck />
        </span>
        <p className="font-sans leading-5 text-sm text-gray-500">
          Kostenloser Versand gilt für alle Bestellungen über{' '}
          <span className="font-semibold">€15</span>
        </p>
      </li>
      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start mr-4">
          <FiHome />
        </span>
        <p className="font-sans leading-5 text-sm text-gray-500">
          Lieferung nach Hause innerhalb <span className="font-semibold">30 Min</span>
        </p>
      </li>
      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start mr-4">
          <FiDollarSign />
        </span>
        <p className="font-sans leading-5 text-sm text-gray-500">
          Zahlungen garantiert durch PayPal, Kreditkarte, G Pay, Apple Pay
        </p>
      </li>
      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start mr-4">
          <FiRepeat />
        </span>
        <p className="font-sans leading-5 text-sm text-gray-500">
          <span className="font-semibold">14</span> Tage Geld zurück
           Garantie
        </p>
      </li>

      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start mr-4">
          <FiShieldOff />
        </span>
        <p className="font-sans leading-5 text-sm text-gray-500">
          Garantie auf diesen Artikel nicht verfügbar
        </p>
      </li>
      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start mr-4">
          <FiSun />
        </span>
        <p className="font-sans leading-5 text-sm text-gray-500">
          Garantiert 100 % - Zufriedenheitsgarantien
        </p>
      </li>

      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start mr-4">
          <FiMapPin />
        </span>
        <p className="font-sans leading-5 text-sm text-gray-500">
          Lieferung von unserem Punkt Wien Österreich
        </p>
      </li>
    </ul>
  );
};

export default Card;
