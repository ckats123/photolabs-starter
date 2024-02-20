// frontend/src/App.jsx
import React from "react";

// import TopNavigationBar from "./components/TopNavigationBar";

import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";

const App = () => {
  return (
    <div className="App">
      {/* <TopNavigationBar /> */}
      <HomeRoute photos={photos} topics={topics} />
    </div>
  );
};

export default App;
