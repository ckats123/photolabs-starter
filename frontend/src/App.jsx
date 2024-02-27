// App.jsx
import React from "react"; // Add this import statement
import { useState } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  const { photos, topics, activePhoto, showModal, favoritedPhotos } =
    state;

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        setModalVisibility={setPhotoSelected}
        setActivePhoto={setPhotoSelected}
        favoritedPhotos={favoritedPhotos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setFavoritedPhotos={setPhotoSelected}
      />
      <PhotoDetailsModal
        photos={state.photoData || photos}
        activePhoto={state.activePhoto}
        setActivePhoto={setPhotoSelected}
        favoritedPhotos={state.favoritedPhotos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setFavoritedPhotos={setPhotoSelected}
      />
    </div>
  );
};

export default App;
