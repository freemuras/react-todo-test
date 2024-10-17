import React, { Children } from "react";
import "../assets/css/Template.css";

const Template = ({ children }) => {
  return <div className="template">{children}</div>;
};

export default Template;
