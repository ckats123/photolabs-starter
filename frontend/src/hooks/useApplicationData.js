// hooks/useApplicationData.js
import { useState } from "react";
import photos from "mocks/photos";
import topics from "mocks/topics";

const useApplicationData = () => {
  const [state, setState] = useState({
    photos,
    topics,
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

  // Destructuring state for cleaner code
  const { photos, topics, activePhoto, showModal, favoritedPhotos } =
    state;

  return {
    state: {
      photos,
      topics,
      activePhoto,
      showModal,
      favoritedPhotos,
    },
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
