// REACT
import { Children, useRef } from "react";

// FORM
export default function Form({
  submitForm,
  setFormData,
  form,
  formData,
  isSubmitButton = false,
}) {
  // USE REF
  const imageInput = useRef();

  // CUSTOM FUNCTION
  const onImageSelectButtonClicked = (e) => {
    e.preventDefault();
    imageInput.current.click();
  };

  const handleImage = (e) => {
    const files = Array.from(e.target.files);
    const images = [];

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          images.push(reader.result);
        }
      };

      reader.readAsDataURL(file);
    });

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
            isFieldset,
            legend,
            children,
            tagType,
            type,
            className,
            placeholder,
            name,
            label,
            rows,
            required,
            autoFocus,
            options,
            multiple,
            labelClass,
            containerClass,
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
                          value={formData[name]}
                          onChange={(e) => handleInput(e)}
                        />
                        <div className="text-base">{label}</div>
                      </div>
                    )
                  )
                )}
              </fieldset>
            ) : tagType === "textarea" ? (
              <div className={containerClass}>
                <label className={labelClass}>{label}</label>
                <textarea
                  className={className}
                  placeholder={placeholder}
                  required={required || false}
                  autoFocus={autoFocus || false}
                  rows={rows}
                  name={name}
                  value={formData[name]}
                  onChange={(e) => handleInput(e)}
                ></textarea>
              </div>
            ) : tagType === "select" ? (
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
            ) : tagType === "file" ? (
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
                  <button
                    className="aspect-square h-16 w-16 border border-gray text-3xl"
                    onClick={(e) => onImageSelectButtonClicked(e)}
                  >
                    +
                  </button>
                  {Children.toArray(
                    formData[name]?.map((item) => (
                      <img
                        src={item}
                        alt=""
                        className="aspect-square h-16 w-16 border border-gray"
                      />
                    ))
                  )}
                </div>
              </div>
            ) : (
              <div className={containerClass}>
                <label className={labelClass}>{label}</label>
                <input
                  type={type}
                  className={className}
                  placeholder={placeholder}
                  required={required || false}
                  autoFocus={autoFocus || false}
                  name={name}
                  value={formData[name]}
                  onChange={(e) => handleInput(e)}
                />
              </div>
            )
        )
      )}
      {isSubmitButton && (
        <div className="flex justify-end">
          <button className="primary-button" type="submit">
            SUBMIT
          </button>
        </div>
      )}
    </form>
  );
}
