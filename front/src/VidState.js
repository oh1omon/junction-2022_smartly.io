import React, { createContext, useState } from "react";
const VidContext = createContext();

const VidStateProvider = ({ children }) => {
  //We download it already from the server here
  const [vidLength, setVidLength] = useState(20);
  const [vidStyle, setVidStyle] = useState("style1");
  //These refer to the checkboxes i.e. enable/disable, not the contents
  const [googleReviews, setGoogleReviews] = useState(false);
  const [yelpReviews, setYelpReviews] = useState(false);
  const [facebookReviews, setFacebookReviews] = useState(false);
  //This will contain contents
  const reviewsContents = {
    google: [
      {
        stars: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed",
      },
    ],
  };
  const [googlePhotoSource, setGooglePhotoSource] = useState(true);
  const [tripAdvisorSource, setTripAdvisorSource] = useState(true);
  const [facebookPhotoSource, setFacebookPhotoSource] = useState(true);
  const [ownPhotosSource, setOwnPhotosSource] = useState(true);

  return (
    <VidContext.Provider
      value={{
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
