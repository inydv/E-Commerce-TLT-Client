import { useEffect } from "react";
import { Header, Footer } from "./Layouts/index";
import { Authentication, Protected, Admin } from "./Routes/index";
import { Toaster } from "react-hot-toast";
import { GETME } from "./Services/index";
import { useUser } from "./Context/User.Context";
import toast from "react-hot-toast";
import toastConfig from "./Constants/Toast.Constant.json";
import { Routes, Route } from "react-router-dom";
import RouteConfig from "./Constants/Routes.Constant.json";
import {
  About,
  Auth,
  Cart,
  Contact,
  Detail,
  Home,
  MyAccount,
  MyOrders,
  NotFound,
  OrderDetails,
  Payment,
  Shipping,
  Shop,
} from "./Pages/index";
import "./Styles/MUI.Style.css";

export default function App() {
  const { setUser } = useUser();

  useEffect(() => {
    (async function () {
      const { data } = await GETME();
      
      if (data && data.SUCCESS) {
        toast.success(data?.MESSAGE, toastConfig.success);
        setUser(data.DATA);
      }
    })();
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-350px)] bg-black">
        <Routes>
          {/* AUTHENTICATION ROUTES */}
          <Route element={<Authentication />}>
            <Route exact path={RouteConfig.Authentication} element={<Auth />} />
            <Route exact path={RouteConfig.forgotPW} element={<Auth />} />
            <Route
              exact
              path={RouteConfig.resetPW + "/:token"}
              element={<Auth />}
            />
          </Route>

          {/* ADMIN ROUTES */}
          {/* <Route element={<Admin />}>
            <Route exact path={RouteConfig.Authentication} element={<Auth />} />
          </Route> */}

          {/* PROTECTED ROUTES */}
          {/* <Route element={<Protected />}> */}
          <Route exact path={RouteConfig.myAccount} element={<MyAccount />} />
          <Route exact path={RouteConfig.shipping} element={<Shipping />} />
          <Route exact path={RouteConfig.payment} element={<Payment />} />
          <Route exact path={RouteConfig.myOrders} element={<MyOrders />} />
          <Route
            exact
            path={RouteConfig.orderDetails}
            element={<OrderDetails />}
          />
          {/* </Route> */}

          {/* PUBLIC ROUTES */}
          <Route exact path={RouteConfig.about} element={<About />} />
          <Route exact path={RouteConfig.home} element={<Home />} />
          <Route exact path={RouteConfig.contact} element={<Contact />} />
          <Route exact path={RouteConfig.productDetails + "/:productId"} element={<Detail />} />
          <Route exact path={RouteConfig.cart} element={<Cart />} />
          <Route exact path={RouteConfig.shop} element={<Shop />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <Toaster />
    </>
  );
}

{
  /* SUCCESS ORDER */
}
