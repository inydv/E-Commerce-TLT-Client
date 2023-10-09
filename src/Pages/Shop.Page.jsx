import { useState } from "react";
import { ProductsCategoriesAndProducts } from "../Shared/index";
import WomenItems from "../Constants/WomenProductsCategoriesItems.Constant.json";
import { ShopFilters } from "../Components/index";
import Drawer from "@mui/material/Drawer";

export default function Shop() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="lg:flex px-5 py-2 md:py-5">
      <div className="hidden lg:block min-w-[400px]">
        <h1 className="font-semibold text-2xl mb-5">All Products</h1>
        <ShopFilters />
      </div>
      <div className="flex items-center justify-between mb-2 lg:hidden">
        <h1 className="font-semibold text-xl">All Products</h1>
        <button
          className="bg-button px-5 py-2 font-semibold"
          onClick={() => setOpenDrawer(true)}
        >
          Filters
        </button>
      </div>
      <div>
        <ProductsCategoriesAndProducts data={WomenItems} isHeading={false} />
        <div className="grid place-items-center mt-5">
          <div className="flex items-center">
            <p className="border-button border-2 py-2 px-3 cursor-pointer hover:text-red-600 text-sm font-semibold">
              FIRST
            </p>
            <p className="border-button border-2 py-2 px-3 cursor-pointer hover:text-red-600 text-sm font-semibold">
              PREV
            </p>
            <p className="border-button border-2 py-2 px-3 cursor-pointer text-red-600 text-sm font-semibold">
              1
            </p>
            <p className="border-button border-2 py-2 px-3 cursor-pointer hover:text-red-600 text-sm font-semibold">
              NEXT
            </p>
            <p className="border-button border-2 py-2 px-3 cursor-pointer hover:text-red-600 text-sm font-semibold">
              LAST
            </p>
          </div>
        </div>
      </div>

      <Drawer anchor="bottom" open={openDrawer}>
        <ShopFilters close={() => setOpenDrawer(false)} />
      </Drawer>
    </div>
  );
}
