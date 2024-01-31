/* eslint-disable react/display-name */
// REACT
import { Children, memo, useRef } from "react";

// CUSTOM IMPORT
import EnumConstant from "../Constants/Enum.Constant.json";
import Images from "../Assets/index";
import DateSplice from "../Pipes/Date.Pipe";
import RSCoversion from "../Pipes/RSConversion.Pipe";

// IMAGE LAZY LOADING
import { LazyLoadImage } from "react-lazy-load-image-component";

// MEMO
const MemoFieldset = memo(
  ({ legend, children_prop, formData, handleInput }) => (
    <fieldset className="flex justify-between">
      <legend className="text-lg font-semibold">{legend}</legend>
      {Children.toArray(
        children_prop?.map(
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
  )
);

const MemoTextarea = memo(
  ({
    containerClass,
    labelClass,
    label,
    className,
    placeholder,
    required,
    autoFocus,
    rows,
    name,
    formData,
    handleInput,
  }) => (
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
  )
);

const MemoSelect = memo(
  ({
    containerClass,
    labelClass,
    label,
    name,
    formData,
    className,
    handleInput,
    options,
  }) => (
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
  )
);

const MemoFile = memo(
  ({
    containerClass,
    labelClass,
    label,
    imageInput,
    type,
    name,
    multiple,
    handleImage,
    isView,
    onImageSelectButtonClicked,
    formData,
  }) => (
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
              <span className="aspect-square h-16 w-16 border border-gray">
                <LazyLoadImage
                  src={item?.url || item}
                  alt="Product Image"
                  className="w-full h-full"
                  effect="blur"
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = Images["NoImageAvailable"];
                  }}
                />
              </span>
            ))
        )}
      </div>
    </div>
  )
);

const MemoInput = memo(
  ({
    containerClass,
    labelClass,
    label,
    isView,
    formData,
    textType,
    name,
    name2,
    type,
    className,
    placeholder,
    required,
    autoFocus,
    handleInput,
  }) => (
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
);

// FORM
export default function Form({
  submitForm,
  setFormData,
  form,
  formData,
  ViewForm = false,
}) {
  // USE REF
  const imageInput = useRef(null);

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
    <form
      onSubmit={(e) => submitForm(e)}
      className="max-w-[800px] min-w-[250px] sm:min-w-[300px]"
    >
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
              <MemoFieldset
                legend={legend}
                children_prop={children}
                formData={formData}
                handleInput={handleInput}
              />
            ) : tagType === EnumConstant.FormTagType.TextArea ? (
              <MemoTextarea
                containerClass={containerClass}
                labelClass={labelClass}
                label={label}
                className={className}
                placeholder={placeholder}
                required={required}
                autoFocus={autoFocus}
                rows={rows}
                name={name}
                formData={formData}
                handleInput={handleInput}
              />
            ) : tagType === EnumConstant.FormTagType.Select ? (
              <MemoSelect
                containerClass={containerClass}
                labelClass={labelClass}
                label={label}
                name={name}
                formData={formData}
                className={className}
                handleInput={handleInput}
                options={options}
              />
            ) : tagType === EnumConstant.FormTagType.File ? (
              <MemoFile
                containerClass={containerClass}
                labelClass={labelClass}
                label={label}
                imageInput={imageInput}
                type={type}
                name={name}
                multiple={multiple}
                handleImage={handleImage}
                isView={isView}
                onImageSelectButtonClicked={onImageSelectButtonClicked}
                formData={formData}
              />
            ) : (
              <MemoInput
                containerClass={containerClass}
                labelClass={labelClass}
                label={label}
                isView={isView}
                formData={formData}
                textType={textType}
                name={name}
                name2={name2}
                type={type}
                className={className}
                placeholder={placeholder}
                required={required}
                autoFocus={autoFocus}
                handleInput={handleInput}
              />
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
