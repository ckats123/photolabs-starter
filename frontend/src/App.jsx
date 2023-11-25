// frontend/src/App.jsx
import React from "react";
import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};
const samplePhotosData = new Array(10).fill(sampleDataForPhotoListItem);


const App = () => (
  <div className="App">
    <PhotoListItem
      key={sampleDataForPhotoListItem.id}
      data={sampleDataForPhotoListItem}
    />
  </div>
);

export default App;
