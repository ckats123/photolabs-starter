import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [isFav, setIsFav] = useState(props.isFavorited);
  const handleFavClick = useCallback(() => {
    if (isFav) {
      props.removeFavoritedPhoto(props.photoData);
    } else {
      props.addFavoritedPhoto(props.photoData);
    }
    setIsFav(!isFav);
  }
  , [isFav, props]);
  return (
    <div className="photo-list__fav-icon" onClick = {handleFavClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon isFav={isFav} />
      </div>
    </div>
  );
}

export default PhotoFavButton;