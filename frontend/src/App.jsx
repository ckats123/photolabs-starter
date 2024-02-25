// App.jsx
import React from "react";
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
        photos={photos}
        topics={topics}
        setModalVisibility={setPhotoSelected}
        setActivePhoto={setPhotoSelected}
        favoritedPhotos={favoritedPhotos}
        updateToFavPhotoIds={updateToFavPhotoIds}
      />
      <PhotoDetailsModal
        photos={photos}
        modalVisibility={showModal}
        setModalVisibility={onClosePhotoDetailsModal}
        activePhoto={activePhoto}
        setActivePhoto={setPhotoSelected}
        favoritedPhotos={favoritedPhotos}
        updateToFavPhotoIds={updateToFavPhotoIds}
      />
    </div>
  );
};

export default App;
