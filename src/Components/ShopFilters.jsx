import { useState } from "react";
import Slider from "@mui/material/Slider";
import { BiSearchAlt2 } from "react-icons/bi";

export default function ShopFilters({ close }) {
  const [value, setValue] = useState([2000, 5000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-black">
      <div className="border-button border-2 rounded p-5">
        <p className="font-semibold text-lg">Search</p>
        <div className="relative">
          <input
            type="text"
            className="bg-black border-button border-2 rounded text-white pl-4 pr-10 py-1 w-full my-3 mb-8"
            placeholder="Type Here....."
          />
          <BiSearchAlt2
            className="absolute top-5 right-2 cursor-pointer"
            size={20}
          />
        </div>
        <p className="font-semibold text-lg">Price</p>
        <Slider
          value={value}
          valueLabelDisplay="auto"
          step={500}
          marks
          min={500}
          max={10000}
          onChange={handleChange}
          className=" my-3 mb-8"
        />
        <p className="font-semibold text-lg">Rating</p>
        <Slider
          valueLabelDisplay="auto"
          step={0.5}
          marks
          min={0}
          max={5}
          className=" my-3 mb-8"
        />
        <p className="font-semibold text-lg">Category</p>
        <select className="bg-black w-full outline-none my-3 mb-8">
          <option hidden selected>
            Select
          </option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
        </select>
        <p className="font-semibold text-lg">Sub-Category</p>
        <select className="bg-black w-full outline-none my-3 mb-8">
          <option hidden selected>
            Select
          </option>
          <option value="Pant">Pant</option>
          <option value="Shirt">Shirt</option>
          <option value="Shoes">Shoes</option>
        </select>
        <p className="font-semibold text-lg">Sort By</p>
        <select className="bg-black w-full outline-none my-3 mb-8">
          <option hidden selected>
            Select
          </option>
          <option value="oldest">Oldest</option>
          <option value="newest">Newest</option>
        </select>
        <div className="flex justify-end">
          <button
            className="bg-button px-5 py-2 font-semibold mr-5"
            onClick={() => close()}
          >
            Clear
          </button>
          <button
            className="bg-button px-5 py-2 font-semibold"
            onClick={() => close()}
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
}
