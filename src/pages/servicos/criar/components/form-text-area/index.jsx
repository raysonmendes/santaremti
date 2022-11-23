import React from "react";
import Wrapper from "../../../../../components/wrapper";

function FormTextArea({
  formName,
  textAreaName,
  textAreaId,
  textAreaLabel,
  textAreaPlaceholder,
  required,
}) {
  return (
    <Wrapper column padding>
      <label
        htmlFor={textAreaName}
        style={{ paddingBottom: "8px", fontSize: "1rem" }}
      >
        {textAreaLabel}
      </label>
      <textarea
        name={textAreaName}
        id={textAreaId}
        cols="30"
        rows="10"
        style={{
          padding: "8px",
          border: "1px solid #000",
          borderRadius: "4px",
          fontSize: "1rem",
          fontFamily: "inherit",
        }}
        placeholder={textAreaPlaceholder}
        required={required}
      ></textarea>
    </Wrapper>
  );
}

export default FormTextArea;
