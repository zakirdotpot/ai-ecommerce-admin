import React from 'react';

// Admin Imports

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdProductionQuantityLimits,
} from 'react-icons/md';
import { AiOutlineProject } from "react-icons/ai";
import { FcSalesPerformance } from 'react-icons/fc';
import { GiKnightBanner } from "react-icons/gi";
import { GrUserSettings } from "react-icons/gr";
import { FaFirstOrder } from 'react-icons/fa';
import { RiCoupon5Line } from 'react-icons/ri';
import { LiaBlogSolid } from "react-icons/lia";
const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/',
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    name: 'Products',
    layout: '/admin',
    path: 'products',
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,

  },
  {
    name: 'Feature Products',
    layout: '/admin',
    icon: <MdBarChart className="h-6 w-6" />,
    path: 'featureProducts',
  },
  {
    name: 'Flash Sale Products',
    layout: '/admin',
    path: 'flashSaleProducts',
    icon: <MdProductionQuantityLimits className="h-6 w-6" />,
  },
  {
    name: 'New Arrivals Products',
    layout: '/admin',
    path: 'newArrivalsProducts',
    icon: <AiOutlineProject className="h-6 w-6" />,
  },
  {
    name: 'Popular Products',
    layout: '/admin',
    path: 'popularProducts',
    icon: <MdPerson className="h-6 w-6" />,
  },


  {
    name: 'Sales & Revenue',
    layout: '/admin',
    path: 'salesAndRevenue',
    icon: <FcSalesPerformance className="h-6 w-6" />,
  },
  {
    name: 'Banners',
    layout: '/admin',
    path: 'banners',
    icon: <GiKnightBanner className="h-6 w-6" />,
  },
  {
    name: 'Orders',
    layout: '/admin',
    path: 'orders',
    icon: <FaFirstOrder className="h-6 w-6" />,
  },
  {
    name: 'Cart Products',
    layout: '/admin',
    path: 'cartProducts',
    icon: <MdPerson className="h-6 w-6" />,
  },
  {
    name: 'Wishlist Products',
    layout: '/admin',
    path: 'wishlistProducts',
    icon: <MdPerson className="h-6 w-6" />,
  },
  {
    name: 'User Management',
    layout: '/admin',
    path: 'userManagement',
    icon: <GrUserSettings className="h-6 w-6" />,
  },
  {
    name: 'Discount Coupons',
    layout: '/admin',
    path: 'discountCoupons',
    icon: <RiCoupon5Line className="h-6 w-6" />,
  },
  {
    name: 'Blogs',
    layout: '/admin',
    path: 'blogs',
    icon: <LiaBlogSolid  className="h-6 w-6" />,
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: 'sign-in',
    icon: <MdLock className="h-6 w-6" />,
  },

];
export default routes;