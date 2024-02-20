// frontend/src/App.jsx
import React from "react";
import PhotoList from "./components/PhotoList";
import TopicList from "components/TopicList";
import TopNavigationBar from "./components/TopNavigationBar";
import topics from "mocks/topics";
import photos from "mocks/photos";

import "./App.scss";
// import HomeRoute from "components/HomeRoute";

const App = () => (
  <div className="App">
    {/* <HomeRoute topics={topics} photos={photos} /> */}
    <TopicList topics={topics} />
    <PhotoList photos={photos} />
  </div>
);

export default App;
