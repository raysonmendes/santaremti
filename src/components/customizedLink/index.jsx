import Link from "next/link";
import React, { ReactElement } from "react";

const CustomizedLink = ({ children, link, noneStyle }) => {
  return (
    <Link href={link}>
      <a
        style={{
          textDecoration: noneStyle && "none",
          color: noneStyle && "inherit",
        }}
      >
        {children}
      </a>
    </Link>
  );
};

export default CustomizedLink;
