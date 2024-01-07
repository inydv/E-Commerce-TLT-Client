// REACT
import { Children, useRef } from "react";

// CUSTOM IMPORT
import EnumConstant from "../Constants/Enum.Constant.json";
import Images from "../Assets/index";
import DateSplice from "../Pipes/Date.Pipe";
import RSCoversion from "../Pipes/RSConversion.Pipe";

// IMAGE LAZY LOADING
import { LazyLoadImage } from "react-lazy-load-image-component";

// FORM
export default function Form({
  submitForm,
  setFormData,
  form,
  formData,
  ViewForm = false,
}) {
  // USE REF
  const imageInput = useRef();

  // CUSTOM FUNCTION
  const onImageSelectButtonClicked = (e) => {
    e.preventDefault();
    imageInput.current.click();
  };

  const handleImage = async (e) => {
    const files = Array.from(e.target.files);
    const images = [];

    const promises = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState === 2) {
            images.push(reader.result);
            resolve();
          }
        };

        reader.readAsDataURL(file);
      });
    });

    await Promise.all(promises);

    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: images,
      };
    });
  };

  const handleInput = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  // JSX ELEMENT
  return (
    <form onSubmit={(e) => submitForm(e)} className="min-w-[300px]">
      {Children.toArray(
        form?.map(
          ({
            isView,
            isFieldset,
            legend,
            children,
            tagType,
            type,
            className,
            placeholder,
            name,
            name2,
            label,
            rows,
            required,
            autoFocus,
            options,
            multiple,
            labelClass,
            containerClass,
            textType,
          }) =>
            isFieldset ? (
              <fieldset className="flex justify-between">
                <legend className="text-lg font-semibold">{legend}</legend>
                {Children.toArray(
                  children?.map(
                    ({
                      type,
                      className,
                      placeholder,
                      autoFocus,
                      name,
                      label,
                      required,
                    }) => (
                      <div className="w-[45%]">
                        <input
                          type={type}
                          className={className}
                          placeholder={placeholder}
                          autoFocus={autoFocus || false}
                          required={required || true}
                          name={name}
                          value={formData[name] || ""}
                          onChange={(e) => handleInput(e)}
                        />
                        <div className="text-base">{label}</div>
                      </div>
                    )
                  )
                )}
              </fieldset>
            ) : tagType === EnumConstant.FormTagType.TextArea ? (
              <div className={containerClass}>
                <label className={labelClass}>{label}</label>
                <textarea
                  className={className}
                  placeholder={placeholder}
                  required={required || false}
                  autoFocus={autoFocus || false}
                  rows={rows}
                  name={name}
                  value={formData[name] || ""}
                  onChange={(e) => handleInput(e)}
                ></textarea>
              </div>
            ) : tagType === EnumConstant.FormTagType.Select ? (
              <div className={containerClass}>
                <label className={labelClass}>{label}</label>
                <select
                  name={name}
                  value={formData[name] || ""}
                  className={className}
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
              </div>
            ) : tagType === EnumConstant.FormTagType.File ? (
              <div className={containerClass}>
                <label className={labelClass}>{label}</label>
                <input
                  ref={imageInput}
                  type={type}
                  name={name}
                  multiple={multiple}
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImage(e)}
                />
                <div className="flex gap-2 overflow-x-scroll max-w-[300px] w-full items-center pb-2">
                  {!isView && (
                    <button
                      className="aspect-square h-16 w-16 border border-gray text-3xl"
                      onClick={(e) => onImageSelectButtonClicked(e)}
                    >
                      +
                    </button>
                  )}
                  {Children.toArray(
                    formData &&
                      formData[name]?.map((item) => (
                        <LazyLoadImage
                          src={isView ? item?.url : item}
                          alt="Product Image"
                          className="aspect-square h-16 w-16 border border-gray"
                          effect="blur"
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = Images["NoImageAvailable"];
                          }}
                        />
                      ))
                  )}
                </div>
              </div>
            ) : (
              <div className={containerClass}>
                <label className={labelClass}>{label}</label>
                {isView ? (
                  formData &&
                  (textType === EnumConstant.View.Date
                    ? DateSplice(formData[name])
                    : textType === EnumConstant.View.Price
                    ? RSCoversion(formData[name])
                    : name2
                    ? formData[name][name2]
                    : formData[name])
                ) : (
                  <input
                    type={type}
                    className={className}
                    placeholder={placeholder}
                    required={required || false}
                    autoFocus={autoFocus || false}
                    name={name}
                    value={formData[name] || ""}
                    onChange={(e) => handleInput(e)}
                  />
                )}
              </div>
            )
        )
      )}
      {!ViewForm && (
        <div className="flex justify-end">
          <button className="primary-button" type="submit">
            SUBMIT
          </button>
        </div>
      )}
    </form>
  );
}
