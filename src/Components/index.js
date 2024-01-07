// REACT
import { lazy } from "react";

// IMPORTS
const Carousel = lazy(() => import("./Carousel.Component"));
const Categories = lazy(() => import("./Categories.Component"));
const ProductsCard = lazy(() => import("./ProductsCard.Component"));
const ProductsCategoriesCard = lazy(() => import("./ProductsCategoriesCard.Component"));
const Banner = lazy(() => import("./Banner.Component"));
const NewsLetter = lazy(() => import("./NewsLetter.Component"));
const AuthenticationForm = lazy(() => import("./AuthenticationForm.Component"));
const AddReviews = lazy(() => import("./AddReviews.Component"));
const ProductDetails = lazy(() => import("./ProductDetails.Component"));
const ReviewCard = lazy(() => import("./ReviewCard.Component"));
const MyAccountForm = lazy(() => import("./MyAccountForm.Component"));
const ProceedNextBox = lazy(() => import("./ProceedNextBox.Component"));
const ShopFilters = lazy(() => import("./ShopFilters.Component"));
const CartTable = lazy(() => import("./CartTable.Component"));
const ProductsCategoriesAndProducts = lazy(() => import("./ProductsCategoriesAndProducts.Component"));
const NotAvailable = lazy(() => import("./NotAvailable.Component"));
const Pagination = lazy(() => import("./Pagination.Component"));

// EXPORTS
export { Carousel, Categories, ProductsCard, ProductsCategoriesCard, Banner, NewsLetter, AuthenticationForm, AddReviews, ProductDetails, ReviewCard, MyAccountForm, ProceedNextBox, ShopFilters, CartTable, ProductsCategoriesAndProducts, NotAvailable, Pagination }