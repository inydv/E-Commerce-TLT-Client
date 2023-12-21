// REACT AND REACT ROUTER DOM
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// MUI
import Drawer from "@mui/material/Drawer";

// CUSTOM IMPORTS
import {
  ShopFilters,
  ProductsCategoriesAndProducts,
  NotAvailable,
} from "../Components/index";
import { GETPRODUCTS } from "../Services/index";

// SHOP
export default function Shop() {
  // STATES
  const [openDrawer, setOpenDrawer] = useState(false);
  const [products, setProducts] = useState([]);

  // USE SEARCH PARAMS
  const [searchParams] = useSearchParams();

  // CUSTOM FUNCTION
  const handlePagination = () => {};

  // USE EFFECT
  useEffect(() => {
    window.scrollTo(0, 0);

    (async function () {
      const currentParams = Object.fromEntries([...searchParams]);

      const { data } = await GETPRODUCTS(currentParams);

      if (data && data.SUCCESS) {
        setProducts(data.DATA);
      }
    })();
  }, [searchParams]);

  // JSX ELEMENT
  return (
    <div className="lg:flex lg:gap-5 px-5 sm:px-10 sm:pt-5">
      <div className="hidden lg:block min-w-[400px]">
        <h1 className="font-semibold text-2xl mb-5">
          <span className="capitalize">
            {searchParams?.get("category") || "All"}
          </span>{" "}
          Products
        </h1>
        <ShopFilters setOpenDrawer={setOpenDrawer} />
      </div>
      <div className="flex items-center justify-between mb-10 lg:hidden">
        <h1 className="font-semibold text-xl">
          <span className="capitalize">
            {searchParams?.get("category") || "All"}
          </span>{" "}
          Products
        </h1>
        <button className="primary-button" onClick={() => setOpenDrawer(true)}>
          Filters
        </button>
      </div>

      {products?.length > 0 ? (
        <div className="w-full">
          <ProductsCategoriesAndProducts data={products} />
          <div className="grid place-items-center mt-5">
            <div className="flex items-center">
              <p className="pagination">FIRST</p>
              <p className="pagination">PREV</p>
              <p className="pagination text-red-600">1</p>
              <p className="pagination">NEXT</p>
              <p className="pagination">LAST</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full grid place-content-center">
          <NotAvailable title={"Product"} />
        </div>
      )}

      <Drawer anchor="bottom" open={openDrawer}>
        <ShopFilters setOpenDrawer={setOpenDrawer} />
      </Drawer>
    </div>
  );
}
