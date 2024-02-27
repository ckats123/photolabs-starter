// HomeRoute.jsx
import React, { useState, useEffect } from "react";

import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";
// import PhotoFavButton from "components/PhotoFavButton";

const HomeRoute = (props) => {
  const {
    photos,
    topics,
    updateToFavPhotoIds,
    // onPhotoClick,
    favoritedPhotos,
    // setFavoritedPhotos,
    // setActivePhoto,
    setPhotoSelected,
    onLoadTopic,
  } = props;

  // // logs favoritedPhotos
  // useEffect(() => {
  //   console.log("fav photos", favoritedPhotos);
  // }, [favoritedPhotos]);

  // // Retrieve favoritedPhotos from local storage on mount
  // useEffect(() => {
  //   const storedFavoritedPhotos =
  //     localStorage.getItem("favoritedPhotos");

  //   // Check if storedFavoritedPhotos is not null and is an array before parsing
  //   if (storedFavoritedPhotos !== null) {
  //     try {
  //       const parsedFavoritedPhotos = JSON.parse(
  //         storedFavoritedPhotos
  //       );

  //       if (Array.isArray(parsedFavoritedPhotos)) {
  //         setFavoritedPhotos(parsedFavoritedPhotos);
  //       } else {
  //         console.error("Stored favorited photos is not an array.");
  //       }
  //     } catch (error) {
  //       console.error(
  //         "Error parsing stored favorited photos:",
  //         error
  //       );
  //     }
  //   }
  // }, []);

  // // Update local storage whenever favoritedPhotos changes
  // useEffect(() => {
  //   localStorage.setItem(
  //     "favoritedPhotos",
  //     JSON.stringify(favoritedPhotos)
  //   );
  // }, [favoritedPhotos]);

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        isFavorited={favoritedPhotos.length > 0}
        onLoadTopic={onLoadTopic}
      />
      <PhotoList
        photos={photos}
        favoritedPhotos={favoritedPhotos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        // onPhotoClick={onPhotoClick}
        setPhotoSelected={setPhotoSelected}
      />
    </div>
  );
};

export default HomeRoute;
