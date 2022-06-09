import {
  // FiUser,
  FiGift,
  FiAlertCircle,
  FiHelpCircle,
  FiTruck,
  FiPhoneCall,
  FiCreditCard,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';
import {
  HiOutlineDocumentText,
  HiOutlinePhoneIncoming,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import {
  IoBagCheckOutline,
  IoGridOutline,
  IoListOutline,
  IoSettingsOutline,
} from 'react-icons/io5';

const pages = [
  // {
  //   title: 'User',
  //   href: '/user/dashboard',
  //   icon: FiUser,
  // },
  {
    title: 'Angebot',
    href: '/offer',
    icon: FiGift,
  },
  {
    title: 'Kasse',
    href: '/checkout',
    icon: IoBagCheckOutline,
  },
  {
    title: 'FAQ',
    href: '/faq',
    icon: FiHelpCircle,
  },
  {
    title: 'Über uns',
    href: '/about-us',
    icon: HiOutlineUserGroup,
  },
  {
    title: 'Kontaktiere uns',
    href: '/contact-us',
    icon: HiOutlinePhoneIncoming,
  },
  {
    title: 'Datenschutz-Bestimmungen',
    href: '/privacy-policy',
    icon: HiOutlineShieldCheck,
  },
  {
    title: 'Terms & Conditions',
    href: '/terms-and-conditions',
    icon: HiOutlineDocumentText,
  },
  {
    title: '404',
    href: '/404',
    icon: FiAlertCircle,
  },
];

const userSidebar = [
  {
    title: 'Dashboard',
    href: '/user/dashboard',
    icon: IoGridOutline,
  },
  {
    title: 'Meine Bestellungen',
    href: '/user/my-orders',
    icon: IoListOutline,
  },
  {
    title: 'Profil aktualisieren',
    href: '/user/update-profile',
    icon: IoSettingsOutline,
  },
  {
    title: 'Passwort ändern',
    href: '/user/change-password',
    icon: HiOutlineDocumentText,
  },
];

const sliderData = [
  {
    id: 1,
    title: 'Das bequeme Einkaufen!',
    info: 'Einkaufen effektives Produkt Bestellen Sie bequem direkt von zu Hause aus...Schnelle Lieferungen!',
    url: '/search?Category=biscuits--cakes',
    image: '/slider/slider-1.jpg',
  },
  {
    id: 2,
    title: 'Womit wir anders sind',
    info: 'Supermarktprodukt über Online-Supermarkt!',
    url: '/search?Category=hardware--tools',
    image: '/slider/slider-2.jpg',
  },
  {
    id: 3,
    title: 'Qualität garantiert!',
    info: 'Intrinsicly Fashion Best Products Rather than accurate Benefits!',
    url: '/search?category=fresh-vegetable',
    image: '/slider/slider-3.jpg',
  },
  {
    id: 4,
    title: 'Schönheit Gesundheit & Werkzeuge Schönheit!',
    info: 'Product Health & Tools Beauty garantiert Ihnen Glamour den idealen Glanz, den Sie suchen!',
    url: '/search?category=beauty--health',
    image: '/slider/slider-4.jpg',
  },
];

const ctaCardData = [
  {
    id: 1,
    title: '',
    subTitle: '',
    image: '/cta/cta-bg-1.jpg',
    url: '/search?category=fresh-vegetable',
  },
  {
    id: 2,
    title: '',
    subTitle: '',
    image: '/cta/cta-bg-2.jpg',
    url: '/search?Category=hardware--tools',
  },
  {
    id: 3,
    title: '',
    subTitle: '',
    image: '/cta/cta-bg-3.jpg',
    url: '/search?Category=beauty--health',
  },
];

const featurePromo = [
  {
    id: 1,
    title: 'Kostenloser Versand',
    info: 'Ab €15.00',
    icon: FiTruck,
  },
  {
    id: 2,
    title: 'Unterstützung',
    info: 'jederzeit',
    icon: FiPhoneCall,
  },
  {
    id: 3,
    title: 'Sichere Bezahlung',
    info: 'Völlig sicher',
    icon: FiCreditCard,
  },
  {
    id: 4,
    title: 'Neuestes Angebot',
    info: 'Bis zu 20 % Rabatt',
    icon: FiGift,
  },
];

const contactData = [
  {
    id: 1,
    title: 'Schreiben Sie uns eine E-Mail',
    info: 'Das Team wird sich mit Ihnen in Verbindung setzen, sobald es verfügbar ist.',
    icon: FiMail,
    contact: 'info.wromo@gmail.com',
    className: 'bg-emerald-100',
  },
  {
    id: 2,
    title: 'Rufen Sie uns an',
    info: 'Wenn die Telefonleitungen besetzt sind, können Sie uns unter der angezeigten Mail schreiben. Das Team wird sich mit Ihnen in Verbindung setzen, sobald es verfügbar ist.',
    icon: FiPhoneCall,
    contact: '0880-0802773',
    className: 'bg-yellow-100',
  },
  {
    id: 3,
    title: 'Ort',
    info: 'Wien, Österreich',
    icon: FiMapPin,
    contact: '',
    className: 'bg-indigo-100',
  },
];

export {
  pages,
  userSidebar,
  sliderData,
  ctaCardData,
  featurePromo,
  contactData,
};
