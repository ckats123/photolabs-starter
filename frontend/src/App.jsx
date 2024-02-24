// App.jsx
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

  const toggleFavourite = (photoId) => {
    // Check if the photo is already in the favoritedPhotos array
    if (favoritedPhotos.includes(photoId)) {
      // If it is, remove it
      setFavoritedPhotos(
        favoritedPhotos.filter((id) => id !== photoId)
      );
    } else {
      // If it's not, add it
      setFavoritedPhotos([...favoritedPhotos, photoId]);
    }
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        setModalVisibility={setShowModal}
        setActivePhoto={setActivePhoto}
        favoritedPhotos={favoritedPhotos}
        setFavoritedPhotos={setFavoritedPhotos}
        toggleFavourite={toggleFavourite} // Pass down the toggleFavourite function
      />
      <PhotoDetailsModal
        photos={photos}
        modalVisibility={showModal}
        setModalVisibility={setShowModal}
        activePhoto={activePhoto}
        setActivePhoto={setActivePhoto}
        favoritedPhotos={favoritedPhotos}
        setFavoritedPhotos={setFavoritedPhotos}
        toggleFavourite={toggleFavourite} // Pass down the toggleFavourite function
      />
    </div>
  );
};

export default App;
