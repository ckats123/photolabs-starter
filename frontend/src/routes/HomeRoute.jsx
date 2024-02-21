import React, { useState, useEffect } from "react";

import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const { photos, topics, modalVisibility, setModalVisibility } = props;
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
      <TopNavigation topics={topics} isFavorited={favoritedPhotos.length > 0} />
      <PhotoList
        photos={photos}
        favoritedPhotos={favoritedPhotos}
        setFavoritedPhotos={setFavoritedPhotos}
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      />
    </div>
  );
};

export default HomeRoute;
