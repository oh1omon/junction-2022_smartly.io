import React, { useContext } from "react";
import ConfigGridTemplate from "../ConfigGridTemplate";
import CheckBox from "../inputs/CheckBox";
import ExtensibleCheckBox from "../inputs/ExtensibleCheckBox";
import { VidContext } from "../../VidState";

export default function ReviewsProps({ header }) {
  const vidState = useContext(VidContext);
  return (
    <ConfigGridTemplate header={header}>
      <ExtensibleCheckBox
        label={"Google reviews"}
        value={vidState.googleReviews}
        setValue={vidState.setGoogleReviews}
        comments={vidState.reviewsContents.google}
      />
    </ConfigGridTemplate>
  );
}
