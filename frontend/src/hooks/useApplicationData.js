// hooks/useApplicationData.js
import { useState, useEffect } from "react";
import photos from "mocks/photos";
import topics from "mocks/topics";

const useApplicationData = () => {
  const [state, setState] = useState({
    photos: [],
    topics: [],
    activePhoto: null,
    showModal: false,
    favoritedPhotos: [],
  });

  useEffect(() => {
    // Simulating data fetching from an API
    setState((prev) => ({
      ...prev,
      photos,
      topics,
    }));
  }, []);

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

  return {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
