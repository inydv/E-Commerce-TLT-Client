// REACT AND REACT ROUTER DOM
import { useState, useEffect, Children } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

// MUI
import Drawer from "@mui/material/Drawer";

// CUSTOM IMPORTS
import {
  ShopFilters,
  NotAvailable,
  Pagination,
  ProductsCard,
} from "../Components/index";
import { GETPRODUCTS } from "../Services/index";

// SHOP
export default function Shop() {
  // STATES
  const [openDrawer, setOpenDrawer] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredResult, setFilteredResult] = useState(0);

  // USE NAVIGATE AND USE SEARCH PARAMS
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // CUSTOM FUNCTION
  const handlePagination = (pageNumber) => {
    if (pageNumber > 1 && pageNumber < Math.ceil(filteredResult / 8)) {
      navigate({
        pathname: "/shop",
        search: `?${createSearchParams({ ...searchParams, page: pageNumber })}`,
      });
    }
  };

  // USE EFFECT
  useEffect(() => {
    window.scrollTo(0, 0);

    (async function () {
      const currentParams = Object.fromEntries([...searchParams]);

      const { data } = await GETPRODUCTS(currentParams);

      if (data && data.SUCCESS) {
        setProducts(data.DATA?.LISTS);
        setFilteredResult(data.DATA.NUMBER_OF_FILTERED_LIST);
      }
    })();
  }, [searchParams]);

  // JSX ELEMENT
  return (
    <section className="lg:flex lg:gap-5 px-5 sm:px-10 sm:pt-5">
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
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {Children.toArray(
              products?.map((item) => <ProductsCard item={item} />)
            )}
          </div>
          u
          <div className="grid place-items-center mt-5">
            <Pagination
              handlePagination={handlePagination}
              resultPerPage={8}
              filteredResult={filteredResult}
              page={+searchParams.get("page") || 1}
            />
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
    </section>
  );
}
