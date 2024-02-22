// frontend/src/App.jsx
import React from "react";

// import TopNavigationBar from "./components/TopNavigationBar";

import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const App = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [activePhoto, setActivePhoto] = React.useState(null);
  return (
    <div className="App">
      <HomeRoute photos={photos} 
      topics={topics} 
      setModalVisibility={setShowModal} 
      setActivePhoto={setActivePhoto}
      favoritedPhotos={favoritedPhotos}
      setFavoritedPhotos={setFavoritedPhotos}
      />
      <PhotoDetailsModal 
      photos = {photos}
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
