// App.jsx
import React from "react"; // Add this import statement
// import { useState } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal,
    onLoadTopic,
  } = useApplicationData();

  // const { photos, topics, activePhoto, showModal, favoritedPhotos } =
  //   state;

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        favoritedPhotos={state.favoritedPhotos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onPhotoSelect={onPhotoSelect}
        onLoadTopic={onLoadTopic}
      />
      {state.modalVisible && (
      <PhotoDetailsModal
        photos={state.photoData}
        activePhoto={state.activePhoto}
        favoritedPhotos={state.favoritedPhotos}
        onPhotoSelect={onPhotoSelect}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
      />
      )}
    </div>
  );
}


export default App;
