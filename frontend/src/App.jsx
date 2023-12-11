// frontend/src/App.jsx
import React from "react";
import PhotoList from "./components/PhotoList";
import TopNavigationBar from "./components/TopNavigationBar";
import topics from "mocks/topics";
import photos from "mocks/photos";

import "./App.scss";
import HomeRoute from "components/HomeRoute";

const App = () => (
  <div className="App">
    <HomeRoute topics={topics} photos={photos} />
  </div>
);

export default App;
