// frontend/src/components/PhotoListItem.jsx
import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { data } = props;
  const { id, location, imageSource, username, profile } = data;

  return (
    <article className="photo-list_item">
      <div className="photo-list_user-details">
        <img
          src={imageSource}
          alt={`Photo by ${username}`}
          className="photo-list_user-profile"
        />
        <div className="photo-list__user-info">{`Photo ID: ${id}`}</div>
        <div className="photo-list__user-location">{`Location: ${location.city}, ${location.country}`}</div>
        <div className="photo-list__user-username">{`Photographer: ${username}`}</div>
      </div>
    </article>
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
