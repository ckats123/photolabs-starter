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
  return (
    <div className="App">
      {/* <TopNavigationBar /> */}
      <HomeRoute photos={photos} topics={topics} modalVisibility={showModal} setModalVisibility={setShowModal} />
      <PhotoDetailsModal modalVisibility={showModal} setModalVisibility={setShowModal} />
    </div>
  );
};

export default App;
