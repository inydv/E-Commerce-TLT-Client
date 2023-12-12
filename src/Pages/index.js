// REACT
import { lazy } from "react";

// IMPORTS
const About = lazy(() => import('./About.Page'));
const Contact = lazy(() => import('./Contact.Page'));
const Detail = lazy(() => import('./Detail.Page'));
const Home = lazy(() => import('./Home.Page'));
const MyAccount = lazy(() => import('./MyAccount.Page'));
const MyOrders = lazy(() => import('./MyOrders.Page'));
const NotFound = lazy(() => import('./NotFound.Page'));
const Shop = lazy(() => import('./Shop.Page'));
const Cart = lazy(() => import('./Cart.Page'));
const Dashboard = lazy(() => import('./Dashboard.Page'));
const AdminPages = lazy(() => import('./Admin.Page'));
const Auth = lazy(() => import('./Auth.Page'));

// EXPORTS
export { About, Auth, Contact, Detail, Home, MyAccount, MyOrders, NotFound, Shop, Cart, Dashboard, AdminPages }