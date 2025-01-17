// hooks/useApplicationData.js
import { useReducer, useEffect } from "react";

const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  CLOSE_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favoritedPhotos: [
          ...state.favoritedPhotos,
          action.payload.photoId,
        ],
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favoritedPhotos: state.favoritedPhotos.filter(
          (id) => id !== action.payload.photoId
        ),
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload.data,
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload.data,
      };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        activePhoto: action.payload.selectedPhoto,
        modalVisibility: true,
      };

    case ACTIONS.CLOSE_PHOTO_DETAILS:
      return {
        ...state,
        activePhoto: null,
        modalVisibility: action.payload.showDetails,
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const initialState = {
    photoData: [],
    topicData: [],
    activePhoto: null,
    modalVisibility: false,
    favoritedPhotos: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // fetch photo and topic from api
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { data } });
      });

    fetch("/api/topics")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { data } });
      });
  }, []);

  //when user selects photo
  const onPhotoSelect = (photo) => {
    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      payload: { selectedPhoto: photo },
    });
  };

  // set favorite photo
  const updateToFavPhotoIds = (photoId) => {
    dispatch({
      type: state.favoritedPhotos.includes(photoId)
        ? ACTIONS.FAV_PHOTO_REMOVED
        : ACTIONS.FAV_PHOTO_ADDED,
      payload: { photoId },
    });
  };

  // fetch photos for selected topic
  const onLoadTopic = (newTopic) => {
    fetch(`/api/topics/photos/${newTopic.id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: { data },
        });
      })
      .catch((err) => {
        console.log("Error fetching topic data");
      });
  };

  
  const onClosePhotoDetailsModal = () => {
    dispatch({
      type: ACTIONS.CLOSE_PHOTO_DETAILS,
      payload: { showDetails: false },
    });
  };

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
