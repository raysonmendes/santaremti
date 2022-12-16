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
        style={{
          paddingBottom: "8px",
          fontFamily: "Montserrat, sans-serif",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "1.2rem",
          lineHeight: "120%",
          color: "#000000",
        }}
      >
        {textAreaLabel}
      </label>
      <textarea
        name={textAreaName}
        id={textAreaId}
        cols="30"
        rows="10"
        style={{
          width: "58rem",
          height: "29rem",
          padding: "8px",
          border: "0.1rem solid rgb(0, 0, 0, 0.16)",
          borderRadius: "10px",
          fontFamily: "Montserrat, sans-serif",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "1.2rem",
          lineHeight: "120%",
          color: "#000000",
        }}
        placeholder={textAreaPlaceholder}
        required={required}
      ></textarea>
    </Wrapper>
  );
}

export default FormTextArea;
