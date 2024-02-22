import React, { useState, useEffect } from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const {
    photos,
    topics,
    setModalVisibility,
    favoritedPhotos,
    setFavoritedPhotos,
    setActivePhoto,
  } = props;

  // Retrieve favoritedPhotos from local storage on mount
  useEffect(() => {
    const storedFavoritedPhotos = JSON.parse(
      localStorage.getItem("favoritedPhotos")
    );
    if (storedFavoritedPhotos) {
      setFavoritedPhotos(storedFavoritedPhotos);
    }
  }, []);

  // Update local storage whenever favoritedPhotos changes
  useEffect(() => {
    localStorage.setItem(
      "favoritedPhotos",
      JSON.stringify(favoritedPhotos)
    );
  }, [favoritedPhotos]);

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        isFavorited={favoritedPhotos.length > 0}
      />
      <PhotoList
        photos={photos}
        favoritedPhotos={favoritedPhotos}
        setFavoritedPhotos={setFavoritedPhotos}
        setModalVisibility={setModalVisibility}
        setActivePhoto={setActivePhoto}
      />
    </div>
  );
};

export default HomeRoute;
