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
}) {
  return (
    <Wrapper column padding>
      <label
        htmlFor={inputName}
        style={{
          paddingBottom: "8px",
          fontSize: "1rem",
          fontFamily: "inherit",
        }}
      >
        {inputLabel}
      </label>
      <input
        type={type}
        id={inputId}
        name={inputName}
        required={required}
        placeholder={inputPlaceholder}
        style={{
          padding: type === "date" ? "7px" : "8px",
          border: "1px solid #000",
          borderRadius: "4px",
          fontSize: "1rem",
          fontFamily: "inherit",
        }}
      />
    </Wrapper>
  );
}

export default InputForm;
