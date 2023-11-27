// frontend/src/App.jsx
import React from "react";
import PhotoList from "./components/PhotoList";
import TopicList from "./components/TopicList";
import "./App.scss";

const App = () => (
  <div className="App">
    {/* <PhotoList /> */}
    <TopicList />
    <PhotoList />
  </div>
);

export default App;
