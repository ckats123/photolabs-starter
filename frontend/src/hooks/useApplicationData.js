// hooks/useApplicationData.js
import { useReducer, useEffect } from "react";
import photos from "mocks/photos";
import topics from "mocks/topics";

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
    showModal: false,
    favoritedPhotos: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // fetch photo and topic from api
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { data } });
      });

    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { data } });
      });
  }, []);

  //when user selects photo
  const setPhotoSelected = (photo) => {
    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      payload: { selectedPhoto: photo },
    });
  };

  // set favorite photo
  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoId } });
  };

  //close photo details modal
  // http://localhost:8001/api/topics/photos/:topic_id
  const onClosePhotoDetailsModal = (newTopic) => {
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

  // Destructuring state directly in the return statement

  const { activePhoto, showModal, favoritedPhotos } = state;

  return {
    state,

    activePhoto,
    showModal,
    favoritedPhotos,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
