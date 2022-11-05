import React from "react";
import ConfigGridTemplate from "../ConfigGridTemplate";
import CheckBox from "../inputs/CheckBox";
import ExtensibleCheckBox from "../inputs/ExtensibleCheckBox";

export default function ReviewsProps({ header }) {
  return (
    <ConfigGridTemplate header={header}>
      <CheckBox />
      <ExtensibleCheckBox />
    </ConfigGridTemplate>
  );
}
