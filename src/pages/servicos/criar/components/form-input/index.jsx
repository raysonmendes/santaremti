import React from "react";
import Wrapper from "../../../../../components/wrapper";

function InputForm({
  formName,
  inputName,
  inputId,
  inputLabel,
  inputPlaceholder,
  required,
  type,
  value,
  disabled,
}) {
  return (
    <Wrapper column padding>
      <label
        htmlFor={inputName}
        style={{
          paddingBottom: "0.8rem",
          fontSize: "1rem",
          fontFamily: "inherit",
        }}
      >
        {inputLabel}
      </label>
      <input
        disabled={disabled}
        type={type}
        id={inputId}
        name={inputName}
        required={required}
        placeholder={inputPlaceholder}
        style={{
          width: "24.4rem",
          height: "3.4rem",
          padding: type === "date" ? "7px" : "8px",
          border: "0.1rem solid #000000",
          borderRadius: "1rem",
          fontFamily: "Manrope, sans-serif",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "1.6rem",
          lineHeight: "2.4rem",
          textAlign: "center",
          color: "#000000",
        }}
        defaultValue={value}
      />
    </Wrapper>
  );
}

export default InputForm;
