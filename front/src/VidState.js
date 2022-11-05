import React, { createContext, useState } from "react";
const VidContext = createContext();

const VidStateProvider = ({ children }) => {
  const [companyName, setCompanyName] = useState("");
  const [advancedEditing, setAdvancedEditing] = useState(false);
  //We download it already from the server here
  const [vidLength, setVidLength] = useState(20);
  const [vidStyle, setVidStyle] = useState("light");
  //These refer to the checkboxes i.e. enable/disable, not the contents
  const [googleReviews, setGoogleReviews] = useState(true);
  const [yelpReviews, setYelpReviews] = useState(false);
  const [facebookReviews, setFacebookReviews] = useState(false);
  //This will contain contents
  const [reviewsContents, setReviewsContents] = useState({
    google: [
      {
        stars: 5,
        text: "",
      },
    ],
  });
  const [googlePhotoSource, setGooglePhotoSource] = useState(true);
  const [tripAdvisorSource, setTripAdvisorSource] = useState(false);
  const [facebookPhotoSource, setFacebookPhotoSource] = useState(false);
  const [ownPhotosSource, setOwnPhotosSource] = useState(false);

  return (
    <VidContext.Provider
      value={{
        companyName,
        setCompanyName,
        advancedEditing,
        setAdvancedEditing,
        vidLength,
        setVidLength,
        vidStyle,
        setVidStyle,
        googleReviews,
        setGoogleReviews,
        yelpReviews,
        setYelpReviews,
        facebookReviews,
        setFacebookReviews,
        reviewsContents,
        setReviewsContents,
        googlePhotoSource,
        setGooglePhotoSource,
        tripAdvisorSource,
        setTripAdvisorSource,
        facebookPhotoSource,
        setFacebookPhotoSource,
        ownPhotosSource,
        setOwnPhotosSource,
      }}
    >
      {children}
    </VidContext.Provider>
  );
};

const withVidState = (Child) => (props) =>
  (
    <VidContext.Consumer>
      {(context) => <Child {...props} {...context} />}
      {/* Another option is:  {context => <Child {...props} context={context}/>}*/}
    </VidContext.Consumer>
  );

export { VidContext, VidStateProvider, withVidState };
