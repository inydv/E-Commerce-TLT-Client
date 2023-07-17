import {
  Home,
  Auth,
  About,
  Contact,
  Detail,
  NotFound,
  MyAccount,
  MyOrders,
  OrderDetails,
  Payment,
  Shipping,
  Shop,
  Cart,
} from "../Pages/index";
import { routes } from "../Core/Routes";
import { Routes, Route } from "react-router-dom";

export default function User() {
  return (
    <div className="min-h-[calc(100vh-350px)] bg-black">
      <Routes>
        <Route exact path={routes.about} element={<About />} />
        <Route exact path={routes.Authentication} element={<Auth />} />
        <Route exact path={routes.home} element={<Home />} />
        <Route exact path={routes.contact} element={<Contact />} />
        <Route exact path={routes.productDetails} element={<Detail />} />
        <Route exact path={routes.myAccount} element={<MyAccount />} />
        <Route exact path={routes.cart} element={<Cart />} />
        <Route exact path={routes.shipping} element={<Shipping />} />
        <Route exact path={routes.payment} element={<Payment />} />
        <Route exact path={routes.myOrders} element={<MyOrders />} />
        <Route exact path={routes.orderDetails} element={<OrderDetails />} />
        <Route exact path={routes.shop} element={<Shop />} />
        <Route exact path="*" element={<NotFound />} />

        {/* FORGOT PASSWORD
        PASSWORD RESET
        SUCCESS ORDER */}
      </Routes>
    </div>
  );
}
