/* eslint-disable react/display-name */
// REACT AND REACT ROUTER DOM
import { Children, memo, useEffect, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

// MUI
import Slider from "@mui/material/Slider";

// REACT ICONS
import { BiSearchAlt2 } from "@react-icons/all-files/bi/BiSearchAlt2";

// CUSTOM IMPORT
import ShopFilterConstant from "../Constants/ShopFilter.Constant.json";
import EnumConstant from "../Constants/Enum.Constant.json";

// CONSTANT
const INITIAL_FORMDATA = {
  name: "",
  price_gte: 500,
  price_lte: 10000,
  ratings_gte: 0,
  ratings_lte: 5,
  category: "",
  subCategories: "",
  page: 1,
  sort: "newest",
};

// MEMO
const MemoInput = memo(
  ({ label, type, className, placeholder, formData, name, handleInput }) => (
    <>
      <p className="filter-label">{label}</p>
      <div className="relative">
        <BiSearchAlt2 className="absolute bottom-3 left-2" size={25} />
        <input
          type={type}
          className={className}
          placeholder={placeholder}
          name={name}
          value={formData[name]}
          onChange={(e) => handleInput(e)}
        />
      </div>
    </>
  )
);

const MemoSlider = memo(
  ({ label, className, step, min, max, formData, name, handleInput }) => (
    <>
      <p className="filter-label pt-6">{label}</p>
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
  )
);

const MemoSelect = memo(
  ({ label, className, formData, name, handleInput, options }) => (
    <>
      <p className="filter-label pt-6">{label}</p>
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
);

// SHOP FILTERS
export default function ShopFilters({ setOpenDrawer }) {
  // STATE
  const [formData, setFormData] = useState(INITIAL_FORMDATA);

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
    <section className="bg-black">
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
                <MemoInput
                  label={label}
                  type={type}
                  className={className}
                  placeholder={placeholder}
                  formData={formData}
                  name={name}
                  handleInput={handleInput}
                />
              ) : tagType === EnumConstant.FormTagType.Slider ? (
                <MemoSlider
                  label={label}
                  className={className}
                  step={step}
                  min={min}
                  max={max}
                  formData={formData}
                  name={name}
                  handleInput={handleInput}
                />
              ) : (
                <MemoSelect
                  label={label}
                  className={className}
                  formData={formData}
                  name={name}
                  handleInput={handleInput}
                  options={options}
                />
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
    </section>
  );
}
