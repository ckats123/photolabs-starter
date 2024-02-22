import React from "react";

import "../styles/PhotoDetailsModal.scss";
import "../styles/PhotoFavButton.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = (props) => {
  const { setModalVisibility, activePhoto } = props;
  // if (!modalVisibility) {
  //   return null;
  // }

  // Adding a null check for activePhoto
  if (!activePhoto || !modalVisibility) {
    return null;
  }

  // Logging activePhoto to the console
  console.log(activePhoto);

  return (
    <div className="photo-details-modal">
      
      <button
        className="photo-details-modal__close-button"
        onClick={() => setModalVisibility(false)}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <PhotoFavButton />
        <img
          src={activePhoto.urls.regular}
          alt={activePhoto.alt_description}
          className="photo-details-modal__image"
        />

        <div className="photo-details-modal__photographer-details">
          <img
            src={activePhoto.user.profile_image.small}
            alt={activePhoto.user.name}
            className="photo-details-modal__photographer-profile"
          />
          <div className="photo-details-modal__photographer-info">
            <div className="photo-details-modal__photographer-name">
              {activePhoto.user.name}
            </div>
            <div className="photo-details-modal__photographer-location">
              {activePhoto.user.location.city},
              {activePhoto.user.location.country}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
