// PhotoDetailsModal.jsx
import React from "react";

import "../styles/PhotoDetailsModal.scss";
import "../styles/PhotoFavButton.scss";

import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";
// import { on } from "events";

const PhotoDetailsModal = (props) => {
  const {
    photos,
    favoritedPhotos,
    activePhoto,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  } = props;

  const handleCloseModal = () => {
    onClosePhotoDetailsModal();
  };

  // // Adding a null check for activePhoto
  // if (!activePhoto || !modalVisibility) {
  //   return null;
  // }

  // // Logging activePhoto to the console
  // console.log(activePhoto);

  const similarPhotoArray = Object.values(activePhoto.similar_photos);
  const similarPhotoIDs = similarPhotoArray.map((photo) => photo.id);
  const similarPhotos = photos.filter((photo) =>
    similarPhotoIDs.includes(photo.id)
  );


  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="Close" onClick={handleCloseModal} />
      </button>

      <div className="photo-details-modal__images">
        <PhotoFavButton
          updateToFavPhotoIds={updateToFavPhotoIds}
          photo={activePhoto}
          favoritedPhotos={favoritedPhotos}
        />

        <img
          src={activePhoto.urls.full}
          alt={activePhoto.alt_description}
          className="photo-details-modal__image"
        />

        <div className="photo-details-modal__photographer-details">
          <img
            src={activePhoto.user.profile}
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

        <div className="photo-details-modal__images">
          <h2 className="photo-details-modal__header">Similar Photos</h2>
          </div>
          {activePhoto && activePhoto.similar_photos && (
            <PhotoList
              photos={similarPhotos}
              favoritedPhotos={favoritedPhotos}
              updateToFavPhotoIds={updateToFavPhotoIds}
              onPhotoSelect={onPhotoSelect}
            />  
          )}
    </div>
  );
}


export default PhotoDetailsModal;
