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

  return (
    <div className="App">
      <HomeRoute
        setModalVisibility={setPhotoSelected}
        setActivePhoto={setPhotoSelected}
        favoritedPhotos={state.favoritedPhotos}
        updateToFavPhotoIds={updateToFavPhotoIds}
      />
      <PhotoDetailsModal
        modalVisibility={state.showModal}
        setModalVisibility={onClosePhotoDetailsModal}
        activePhoto={state.activePhoto}
        setActivePhoto={setPhotoSelected}
        favoritedPhotos={state.favoritedPhotos}
        updateToFavPhotoIds={updateToFavPhotoIds}
      />
    </div>
  );
};

export default App;
