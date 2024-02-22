import React from "react";
import "../styles/PhotoDetailsModal.scss";
import "../styles/PhotoFavButton.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = (props) => {
  const {
    setModalVisibility,
    activePhoto,
    modalVisibility,
    favoritedPhotos,
    toggleFavourite, // Added prop
  } = props;

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
        <PhotoFavButton
          toggleFavourite={toggleFavourite} // Use the prop from the parent
          photoId={activePhoto.id}
          favorites={favoritedPhotos}
        />

        <img
          src={activePhoto.urls.full}
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

        <div className="photo-details-modal__header">
          Similar Photos
        </div>
        <div className="photo-details-modal__images">
          <PhotoList
            photos={activePhoto.similar_photos}
            favorites={favoritedPhotos}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
