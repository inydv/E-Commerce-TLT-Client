// REACT AND REACT ROUTER DOM
import { Children, useEffect, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

// MUI
import Slider from "@mui/material/Slider";

// REACT ICONS
import { BiSearchAlt2 } from "react-icons/bi";

// CUSTOM IMPORT
import ShopFilterConstant from "../Constants/ShopFilter.Constant.json";
import EnumConstant from "../Constants/Enum.Constant.json";

// SHOP FILTERS
export default function ShopFilters({ setOpenDrawer }) {
  // STATE
  const [formData, setFormData] = useState({
    name: "",
    price_gte: 500,
    price_lte: 10000,
    ratings_gte: 0,
    ratings_lte: 5,
    category: "",
    subCategories: "",
    page: 1,
    sort: "newest",
  });

  // USE NAVIGATE AND USE SEARCH PARAMS
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // CUSTOM FUNCTION
  const handleInput = (e) => {
    if (e.target.name === "price" || e.target.name === "ratings") {
      setFormData((prevState) => {
        return {
          ...prevState,
          [`${e.target.name}_gte`]: e.target.value[0],
          [`${e.target.name}_lte`]: e.target.value[1],
        };
      });
    } else {
      setFormData((prevState) => {
        return {
          ...prevState,
          [e.target.name]: e.target.value,
        };
      });
    }
  };

  const handleSubmit = async () => {
    navigate({
      pathname: "/shop",
      search: `?${createSearchParams(formData)}`,
    });
    setOpenDrawer(false);
  };

  const handleClear = async () => {
    navigate("/shop");
    setOpenDrawer(false);
  };

  // USE EFFECT
  useEffect(() => {
    for (const entry of searchParams.entries()) {
      const [param, value] = entry;
      setFormData((prevState) => {
        return {
          ...prevState,
          [param]: value,
        };
      });
    }
  }, [searchParams]);

  // JSX ELEMENT
  return (
    <div className="bg-black">
      <div className="border-customGray border-2 rounded p-5 sm:p-10">
        {Children.toArray(
          ShopFilterConstant?.map(
            ({
              className,
              label,
              tagType,
              name,
              max,
              min,
              options,
              placeholder,
              step,
              type,
            }) =>
              tagType === EnumConstant.FormTagType.Input ? (
                <>
                  <p className="font-semibold text-lg pb-3">{label}</p>
                  <div className="relative">
                    <input
                      type={type}
                      className={className}
                      placeholder={placeholder}
                      name={name}
                      value={formData[name]}
                      onChange={(e) => handleInput(e)}
                    />
                    <BiSearchAlt2
                      className="absolute bottom-3 right-2 cursor-pointer"
                      size={25}
                    />
                  </div>
                </>
              ) : tagType === EnumConstant.FormTagType.Slider ? (
                <>
                  <p className="font-semibold text-lg pt-6 pb-3">{label}</p>
                  <Slider
                    value={[
                      parseFloat(formData[`${name}_gte`]),
                      parseFloat(formData[`${name}_lte`]),
                    ]}
                    valueLabelDisplay="auto"
                    step={step}
                    marks
                    min={min}
                    max={max}
                    name={name}
                    onChange={(e) => handleInput(e)}
                    className={className}
                  />
                </>
              ) : (
                <>
                  <p className="font-semibold text-lg pt-6 pb-3">{label}</p>
                  <select
                    className={className}
                    value={formData[name]}
                    name={name}
                    onChange={(e) => handleInput(e)}
                  >
                    <option hidden value="">
                      Select
                    </option>
                    {Children.toArray(
                      options?.map(({ name, value }) => (
                        <option value={value}>{name}</option>
                      ))
                    )}
                  </select>
                </>
              )
          )
        )}
        <div className="flex justify-end gap-5 pt-6">
          <button className="primary-button" onClick={() => handleClear()}>
            Clear
          </button>
          <button className="primary-button" onClick={() => handleSubmit()}>
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
}
