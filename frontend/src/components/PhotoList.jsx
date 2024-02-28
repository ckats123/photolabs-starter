import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const photos = props.photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        data={photo}
        favoritedPhotos={props.favoritedPhotos}
        updateToFavPhotoIds={props.updateToFavPhotoIds}
        setPhotoSelected={props.setPhotoSelected}
      />
    );
  });
  return <ul className="photo-list">{photos}</ul>;
};

export default PhotoList;
