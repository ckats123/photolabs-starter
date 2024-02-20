import React, { useState, useEffect } from "react";

import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const { photos, topics } = props;
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  useEffect(() => {
    const favoritedPhotos = JSON.parse(
      localStorage.getItem("favoritedPhotos")
    );
    if (favoritedPhotos) {
      setFavoritedPhotos(favoritedPhotos);
    }
  }, []);
  return (
    <div className="home-route">
      <TopNavigation topics={topics} />
      <PhotoList
        photos={photos}
        favoritedPhotos={favoritedPhotos}
        setFavoritedPhotos={setFavoritedPhotos}
      />
    </div>
  );
};

export default HomeRoute;
