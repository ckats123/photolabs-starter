// frontend/src/components/PhotoListItem.jsx
import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    data,
    favoritedPhotos,
    updateToFavPhotoIds,
    onPhotoSelect,
  } = props;

  const openModal = () => {
    onPhotoSelect(data); console.log(data);
  };

  return (
    <article className="photo-list__item">
      <PhotoFavButton
        updateToFavPhotoIds={updateToFavPhotoIds}
        favoritedPhotos={favoritedPhotos}
        photo={data}
      />
      <img
        src={data.urls.regular}
        alt="image from Unsplash.com"
        className="photo-list__image"
        onClick={openModal}
      />

      <div className="photo-list__user-details">
        <img
          src={data.user.profile}
          alt="user profile picture"
          className="photo-list__user-profile"
        />
        <div className="photo-list__user-info">
          <div className="photo-list__user-name">
            {data.user.name}
          </div>
          <div className="photo-list__user-location">
            {`Location: ${data.location.city}, ${data.location.country}`}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PhotoListItem;
