// frontend/src/components/PhotoListItem.jsx
import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  const {
    photos, 
    data, 
    favoritedPhotos, 
   updateToFavPhotoIds,
   onPhotoClick,
  } = props;
  
  // const isFavorited = favoritedPhotos.some((photo) => photo.id === data.id);



  const openModal = () => {
    onPhotoClick(data);
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

// ({ data }) => {
//   const { id, location, imageSource, username, profile } = data;

//   return (
//     <div>
//       <img src={imageSource} alt={`Photo by ${username}`} />
//       <p>{`Photo ID: ${id}`}</p>
//       <p>{`Location: ${location.city}, ${location.country}`}</p>
//       <p>{`Photographer: ${username}`}</p>
//       <img src={profile} alt={`Profile of ${username}`} />
//     </div>
//   );
// };

export default PhotoListItem;
