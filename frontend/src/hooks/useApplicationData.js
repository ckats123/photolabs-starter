//  useApplicationData.js
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
  
    const fetchData = async () => {
      try {
        const fetchedPhotos = await fetchPhotos(); // Replace with actual function to fetch photos
        const fetchedTopics = await fetchTopics(); // Replace with actual function to fetch topics

        setState((prev) => ({
          ...prev,
          photos: fetchedPhotos,
          topics: fetchedTopics,
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // 

  const updateToFavPhotoIds = (photoId) => {
    setState((prev) => ({
      ...prev,
      favoritedPhotos: prev.favoritedPhotos.includes(photoId)
        ? prev.favoritedPhotos.filter((id) => id !== photoId)
        : [...prev.favoritedPhotos, photoId],
    }));
  };

  const setPhotoSelected = (photo) => {
    setState((prev) => ({
      ...prev,
      activePhoto: photo,
      showModal: true,
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
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
