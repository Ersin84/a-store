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
    title: 'Offer',
    href: '/offer',
    icon: FiGift,
  },
  {
    title: 'Checkout',
    href: '/checkout',
    icon: IoBagCheckOutline,
  },
  {
    title: 'FAQ',
    href: '/faq',
    icon: FiHelpCircle,
  },
  {
    title: 'About Us',
    href: '/about-us',
    icon: HiOutlineUserGroup,
  },
  {
    title: 'Contact Us',
    href: '/contact-us',
    icon: HiOutlinePhoneIncoming,
  },
  {
    title: 'Privacy Policy',
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
    title: 'My Orders',
    href: '/user/my-orders',
    icon: IoListOutline,
  },
  {
    title: 'Update Profile',
    href: '/user/update-profile',
    icon: IoSettingsOutline,
  },
  {
    title: 'Change Password',
    href: '/user/change-password',
    icon: HiOutlineDocumentText,
  },
];

const sliderData = [
  {
    id: 1,
    title: 'The Best Comfortable Shopping!',
    info: 'Shopping effective product Order comfortable directly from home...Fast Deliveries!',
    url: '/search?Category=biscuits--cakes',
    image: '/slider/slider-1.jpg',
  },
  {
    id: 2,
    title: 'Best Different Type of Product',
    info: 'Product Marketplace empowered by Wromo Marketplace & Wromo Studio!',
    url: '/search?Category=hardware--tools-',
    image: '/slider/slider-2.jpg',
  },
  {
    id: 3,
    title: 'Quality Guaranteed!',
    info: 'Intrinsicly Fashion Best Products Rather than accurate Benefits!',
    url: '/search?category=fresh-vegetable',
    image: '/slider/slider-3.jpg',
  },
  {
    id: 4,
    title: 'Beauty Health & Tools Beauty!',
    info: 'Product Health & Tools Beauty guarantees you Glamor the ideal sparkle you are looking for!',
    url: '/search?category=beauty--health',
    image: '/slider/slider-4.jpg',
  },
];

const ctaCardData = [
  {
    id: 1,
    title: 'Shopping of',
    subTitle: 'Fresh & Natural',
    image: '/cta/cta-bg-1.jpg',
    url: '/search?category=fresh-vegetable',
  },
  {
    id: 2,
    title: 'Shopping of',
    subTitle: 'Hardware & Tools',
    image: '/cta/cta-bg-2.jpg',
    url: '/search?Category=hardware--tools-',
  },
  {
    id: 3,
    title: 'Shopping of',
    subTitle: 'Bread & Bakery',
    image: '/cta/cta-bg-3.jpg',
    url: '/search?Category=beauty--health',
  },
];

const featurePromo = [
  {
    id: 1,
    title: 'Free Shipping',
    info: 'From $25.00',
    icon: FiTruck,
  },
  {
    id: 2,
    title: 'Support 24/7',
    info: 'At Anytime',
    icon: FiPhoneCall,
  },
  {
    id: 3,
    title: 'Secure Payment',
    info: 'Totally Safe',
    icon: FiCreditCard,
  },
  {
    id: 4,
    title: 'Latest Offer',
    info: 'Upto 20% Off',
    icon: FiGift,
  },
];

const contactData = [
  {
    id: 1,
    title: 'Email Us',
    info: 'Interactively grow empowered for process-centric total linkage.',
    icon: FiMail,
    contact: 'info.wromo@gmail.com',
    className: 'bg-emerald-100',
  },
  {
    id: 2,
    title: 'Call Us',
    info: 'Distinctively disseminate focused solutions clicks-and-mortar ministate.',
    icon: FiPhoneCall,
    contact: '0880-0802773',
    className: 'bg-yellow-100',
  },
  {
    id: 3,
    title: 'Location',
    info: 'Invalidenstraße 13, 1030 Wien, Austria AT',
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
