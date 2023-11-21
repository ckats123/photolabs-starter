// frontend/src/components/PhotoListItem.jsx
import React from "react";

const PhotoListItem = (props) => {
  const { data } = props;
  const { id, location, imageSource, username, profile } = data;

  return (
    <div>
      <img src={imageSource} alt={`Photo by ${username}`} />
      <p>{`Photo ID: ${id}`}</p>
      <p>{`Location: ${location.city}, ${location.country}`}</p>
      <p>{`Photographer: ${username}`}</p>
      <img src={profile} alt={`Profile of ${username}`} />
    </div>
  );
};

// ({ data }) => {
//   const { id, location, imageSource, username, profile } = data;

//   return (
//     <div>
//       <img src={imageSource} alt={`Photo by ${username}`} />
//       <p>{`Photo ID: ${id}`}</p>
//       <p>{`Location: ${location.city}, ${location.country}`}</p>
//       <p>{`Photographer: ${username}`}</p>
//       <img src={profile} alt={`Profile of ${username}`} />
//     </div>
//   );
// };

export default PhotoListItem;
