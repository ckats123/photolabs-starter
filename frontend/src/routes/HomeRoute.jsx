// HomeRoute.jsx
import React from "react";

import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";


const HomeRoute = (props) => {
  const {
    photos,
    topics,
    onPhotoSelect,
    updateToFavPhotoIds,
    favoritedPhotos,
    onLoadTopic,
  } = props;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        isFavPhotoExist={favoritedPhotos.length > 0}
        onLoadTopic={onLoadTopic}
      />
      <PhotoList
        photos={photos}
        favoritedPhotos={favoritedPhotos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onPhotoSelect={onPhotoSelect}
      />
    </div>
  );
};

export default HomeRoute;
