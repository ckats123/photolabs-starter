import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [isFav, setIsFav] = useState(props.isFavorited);
  const handleFavClick = useCallback(() => {
    setIsFav((prevIsFav) => !prevIsFav);
    props.setFavoritedPhotos((prevFavoritedPhotos) => {
      if (isFav) {
        return prevFavoritedPhotos.filter((photoId) => photoId !== props.photoId);
      }
      return [...prevFavoritedPhotos, props.photoId];
    });
  }, []);
  return (
    <div className="photo-list__fav-icon" onClick = {handleFavClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon isFav={isFav} />
      </div>
    </div>
  );
}

export default PhotoFavButton;