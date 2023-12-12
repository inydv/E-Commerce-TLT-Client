// REACT AND REACT ROUTER DOM
import { useEffect, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";

// TOASTER
import toast, { Toaster } from "react-hot-toast";
import ToastConstant from "./Constants/Toast.Constant.json";

// CUSTOM  IMPORTS
import { Header, Footer, Loader } from "./Layouts/index";
import { Authentication, Protected, Admin } from "./Routes/index";
import { GETME } from "./Services/index";
import { useUser } from "./Context/User.Context";
import RouteConstant from "./Constants/Routes.Constant.json";
import {
  About,
  Auth,
  Cart,
  Contact,
  Dashboard,
  Detail,
  Home,
  MyAccount,
  MyOrders,
  NotFound,
  Shop,
  AdminPages,
} from "./Pages/index";

// IMPORT STYLES
import "./Styles/MUI.Style.css";

// APP
export default function App() {
  // STATE
  const [loading, setLoading] = useState();

  // CONTEXT
  const { setUser } = useUser();

  // USE EFFECT
  useEffect(() => {
    (async function () {
      const { data } = await GETME();

      if (data && data.SUCCESS) {
        toast.success(data?.MESSAGE, ToastConstant.success);
        setUser(data.DATA);
      }
    })();
  }, [setUser]);

  // EVENT LISTIONOR (DISABELE RIGHT CLICK)
  window.addEventListener("contextmenu", (e) => e.preventDefault());

  // JSX ELEMENT
  return loading ? (
    <Loader />
  ) : (
    <>
      <Header />
      <div className="min-h-content bg-black">
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* AUTHENTICATION ROUTES */}
            <Route element={<Authentication />}>
              <Route
                exact
                path={RouteConstant.Authentication}
                element={<Auth />}
              />
              <Route exact path={RouteConstant.forgotPW} element={<Auth />} />
              <Route
                exact
                path={RouteConstant.resetPW + "/:token"}
                element={<Auth />}
              />
            </Route>

            {/* ADMIN ROUTES */}
            <Route element={<Admin />}>
              <Route
                exact
                path={RouteConstant.dashboard}
                element={<Dashboard />}
              />
              <Route
                exact
                path={RouteConstant.adminContact}
                element={<AdminPages />}
              />
              <Route
                exact
                path={RouteConstant.adminOrder}
                element={<AdminPages />}
              />
              <Route
                exact
                path={RouteConstant.adminProduct}
                element={<AdminPages />}
              />
              <Route
                exact
                path={RouteConstant.adminUser}
                element={<AdminPages />}
              />
            </Route>

            {/* PROTECTED ROUTES */}
            <Route element={<Protected />}>
              <Route
                exact
                path={RouteConstant.myAccount}
                element={<MyAccount />}
              />
              <Route
                exact
                path={RouteConstant.myOrders}
                element={<MyOrders />}
              />
            </Route>

            {/* PUBLIC ROUTES */}
            <Route exact path={RouteConstant.about} element={<About />} />
            <Route exact path={RouteConstant.home} element={<Home />} />
            <Route exact path={RouteConstant.contact} element={<Contact />} />
            <Route
              exact
              path={RouteConstant.productDetails + "/:productId"}
              element={<Detail />}
            />
            <Route exact path={RouteConstant.cart} element={<Cart />} />
            <Route exact path={RouteConstant.shop} element={<Shop />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
      <Toaster />
    </>
  );
}
