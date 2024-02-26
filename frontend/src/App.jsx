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
        setFavoritedPhotos={setPhotoSelected}
      />
      <PhotoDetailsModal
        photos={state.photos}
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
