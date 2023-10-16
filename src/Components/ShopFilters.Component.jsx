import { Children, useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import { BiSearchAlt2 } from "react-icons/bi";
import ShopFilterConstant from "../Constants/ShopFilter.Constant.json";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

export default function ShopFilters({ close }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

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
    close();
  };

  const handleClear = async () => {
    navigate("/shop");
    close();
  };

  return (
    <div className="bg-black">
      <div className="border-button border-2 rounded p-5">
        {Children.toArray(
          ShopFilterConstant?.map(
            ({
              className,
              heading,
              inputType,
              name,
              max,
              min,
              options,
              placeholder,
              step,
              type,
            }) =>
              inputType === "input" ? (
                <>
                  <p className="font-semibold text-lg">{heading}</p>
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
                      className="absolute top-5 right-2 cursor-pointer"
                      size={20}
                    />
                  </div>
                </>
              ) : inputType === "slider" ? (
                <>
                  <p className="font-semibold text-lg">{heading}</p>
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
                  <p className="font-semibold text-lg">{heading}</p>
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
        <div className="flex justify-end">
          <button
            className="bg-button px-5 py-2 font-semibold mr-5"
            onClick={() => handleClear()}
          >
            Clear
          </button>
          <button
            className="bg-button px-5 py-2 font-semibold"
            onClick={() => handleSubmit()}
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
}
