import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const photos = props.photos.map((photoData) => {
    return (
      <PhotoListItem
        key={photoData.id}
        data={photoData}
        favoritedPhotos={props.favoritedPhotos}
        setFavoritedPhotos={props.setFavoritedPhotos}
      />
    );
  });
  return <ul className="photo-list">{photos}</ul>;
};

export default PhotoList;
