import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);
  const [favoritedPhotos, setFavoritedPhotos] = useState([]); // Initialize with an appropriate default value

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        setModalVisibility={setShowModal}
        setActivePhoto={setActivePhoto}
        favoritedPhotos={favoritedPhotos}
        setFavoritedPhotos={setFavoritedPhotos}
      />
      <PhotoDetailsModal
        photos={photos}
        modalVisibility={showModal}
        setModalVisibility={setShowModal}
        activePhoto={activePhoto}
        setActivePhoto={setActivePhoto}
        favoritedPhotos={favoritedPhotos}
        setFavoritedPhotos={setFavoritedPhotos}
      />
    </div>
  );
};

export default App;
