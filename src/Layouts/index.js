// REACT
import { lazy } from "react";

// IMPORTS
const Header = lazy(() => import('./Header.Layout'));
const Footer = lazy(() => import('./Footer.Layout'));
const Sidebar = lazy(() => import('./Sidebar.Layout'));
const Loader = lazy(() => import('./Loader.Layout'));

// EXPORTS
export { Header, Footer, Sidebar, Loader };