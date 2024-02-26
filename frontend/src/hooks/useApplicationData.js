// hooks/useApplicationData.js
import { useState } from "react";
import photos from "mocks/photos";
import topics from "mocks/topics";

const useApplicationData = () => {
  const [state, setState] = useState({
    photos: photos,
    topics: topics,
    activePhoto: null,
    showModal: false,
    favoritedPhotos: [],
  });

  const setPhotoSelected = (photo) => {
    setState((prev) => ({
      ...prev,
      activePhoto: photo,
      showModal: true,
    }));
  };

  const updateToFavPhotoIds = (photoId) => {
    setState((prev) => ({
      ...prev,
      favoritedPhotos: prev.favoritedPhotos.includes(photoId)
        ? prev.favoritedPhotos.filter((id) => id !== photoId)
        : [...prev.favoritedPhotos, photoId],
    }));
  };

  const onClosePhotoDetailsModal = () => {
    setState((prev) => ({
      ...prev,
      activePhoto: null,
      showModal: false,
    }));
  };

//it overides the import at the top
  // Destructuring state directly in the return statement
  
  // i see, so the below is okay? and just fix app.js?
  //yes
  //you can siply pass the state to the returned object
  const { activePhoto, showModal, favoritedPhotos } =
    state;

  return {
    state,// the entire state is returned
    // activePhoto,
    // showModal,
    // favoritedPhotos,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
