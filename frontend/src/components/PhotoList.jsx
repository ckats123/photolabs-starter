import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const photos = props.photos.map((photo) => {
    return <PhotoListItem 
    key={photo.id} 
    data={photo} 
    favoritedPhotos={props.favoritedPhotos} 
    setFavoritedPhotos={props.setFavoritedPhotos} 
    modalVisibility={props.modalVisibility} 
    setModalVisibility={props.setModalVisibility} 
    activePhoto={props.activePhoto}
    setActivePhoto={props.setActivePhoto}
    />; 
  });
  return <ul className="photo-list">{photos}</ul>;
}






  // const { data, favoritedPhotos, setFavoritedPhotos } = props;
  // const addFavoritedPhoto = (photoData) => {
  //   const newFavoritedPhotos = [...favoritedPhotos, photoData];
  //   setFavoritedPhotos(newFavoritedPhotos);
  //   localStorage.setItem(
  //     "favoritedPhotos",
  //     JSON.stringify(newFavoritedPhotos)
  //   );
  // };
  // return (
    // <article className="photo-list__photo-item">
    //   <img src={data.urls.small} alt={data.alt_description} />
    //   <PhotoFavButton
    //     photoData={data}
    //     favoritedPhotos={favoritedPhotos}
    //     addFavoritedPhoto={addFavoritedPhoto}
    //   />
    //   <div className="photo-list_user-details">
    //     <img
    //       src={data.user.profile_image.small}
    //       alt={data.user.name}
    //       className="photo-list_user-profile"
    //     />
    //     <div className="photo-list_user-info">
    //       <div className="photo-list_user-user-name">
    //         {data.user.name}
    //       </div>
    //       <div className="photo-list_user-user-location">
    //         {data.user.location}
    //       </div>
    //     </div>
    //   </div>
    // </article>
//   );

//   return <ul className="photo-list">{photos}</ul>;
// };

export default PhotoList;
