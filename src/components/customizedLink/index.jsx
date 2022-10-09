import Link from "next/link";
import React, { ReactElement } from "react";

const CustomizedLink = ({ children, link }) => {
  return (
    <Link href={link}>
      <a>{children}</a>
    </Link>
  );
};

export default CustomizedLink;
