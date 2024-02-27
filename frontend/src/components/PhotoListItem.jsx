// frontend/src/components/PhotoListItem.jsx
import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  const {
    // photos, 
    data, 
    favoritedPhotos, 
   updateToFavPhotoIds,
   onPhotoClick,
  } = props;
  
  // const isFavorited = favoritedPhotos.some((photo) => photo.id === data.id);



  const openModal = () => {
    setPhotoSelected(data);
    // onPhotoClick();
  }

  return (
    <article className="photo-list__item">

      <PhotoFavButton
       updateToFavPhotoIds={updateToFavPhotoIds}
        setFavoritedPhotos={props.setFavoritedPhotos}
        favoritedPhotos={favoritedPhotos}
        photoData={data} 
      />

      <img
        src={data.urls.regular}
        alt={`Photo by ${data.user.username}`}
        className="photo-list__image"
        onClick={openModal}
      />
      <div className="photo-list__user-details">
        <img
          src={data.user.profile}
          alt={`Profile of ${data.user.username}`}
          className="photo-list__user-profile"
        />
        <div className="photo-list__user-info">{`Photo ID: ${data.id}`}</div>
        <div className="photo-list__user-username">
          {`Photographer: ${data.user.username}`}
          </div>
        <div className="photo-list__user-location">
          {`Location: ${data.location.city}, ${data.location.country}`}
          </div>
      </div>
    </article>
  );
};


export default PhotoListItem;
