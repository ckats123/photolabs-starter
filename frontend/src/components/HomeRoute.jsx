import React, { useState, useEffect } from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const HomeRoute = (props) => {
  const { photos } = props;
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  return (
    <div className="home-route">
      <TopNavigation />
      <PhotoList
        photos={photos}
        favoritedPhotos={favoritedPhotos}
        setFavoritedPhotos={setFavoritedPhotos}
      />
    </div>
  );
};

export default HomeRoute;
