// REACT AND REACT ROUTER DOM
import { useEffect, Suspense, useState, useCallback } from "react";
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
import { Request } from "./Configs/RequestMethod.Config";

// IMPORT STYLES
import "./Styles/MUI.Style.css";
import "./Styles/LazyLoading.Style.css";
import "react-lazy-load-image-component/src/effects/blur.css";

// APP
export default function App() {
  // STATE
  const [loading, setLoading] = useState(false);

  // CONTEXT
  const { setUser } = useUser();

  // CUSTOM FUNCTION
  const loadingState = (type = "REMOVE") => {
    if (type === "ADD") {
      document.body.style.overflow = "hidden";
      setLoading(true);
    } else {
      document.body.style.overflow = "auto";
      setLoading(false);
    }
  };

  // AXIOS INTERCEPTOR
  const axiosInterceptor = useCallback(() => {
    Request.interceptors.request.use(
      function (req) {
        loadingState("ADD");
        return req;
      },
      (err) => {
        loadingState();
        return Promise.reject(err);
      }
    );

    Request.interceptors.response.use(
      function (res) {
        loadingState();
        return res;
      },
      (err) => {
        loadingState();
        return Promise.reject(err);
      }
    );
  }, []);

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

  useEffect(() => {
    axiosInterceptor();
  }, [axiosInterceptor]);

  // EVENT LISTIONOR (DISABELE RIGHT CLICK)
  window.addEventListener("contextmenu", (e) => e.preventDefault());

  // JSX ELEMENT
  return (
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
      {loading && <Loader />}
    </>
  );
}
