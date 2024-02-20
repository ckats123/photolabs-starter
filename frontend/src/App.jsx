// frontend/src/App.jsx
import React from "react";

// import TopNavigationBar from "./components/TopNavigationBar";

import "./App.scss";
import HomeRoute from "./routes/HomeRoute";

const App = () => {
  return (
    <div className="App">
      {/* <TopNavigationBar /> */}
      <HomeRoute />
    </div>
  );
};

export default App;
