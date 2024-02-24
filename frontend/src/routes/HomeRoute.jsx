// HomeRoute.jsx
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
    const storedFavoritedPhotos =
      localStorage.getItem("favoritedPhotos");

    // Check if storedFavoritedPhotos is not null and is an array before parsing
    if (storedFavoritedPhotos !== null) {
      try {
        const parsedFavoritedPhotos = JSON.parse(
          storedFavoritedPhotos
        );

        if (Array.isArray(parsedFavoritedPhotos)) {
          setFavoritedPhotos(parsedFavoritedPhotos);
        } else {
          console.error("Stored favorited photos is not an array.");
        }
      } catch (error) {
        console.error(
          "Error parsing stored favorited photos:",
          error
        );
      }
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
        isFavorited={
          Array.isArray(favoritedPhotos) && favoritedPhotos.length > 0
        }
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
