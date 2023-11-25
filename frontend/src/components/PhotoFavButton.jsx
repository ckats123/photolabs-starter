import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isFav, setIsFav] = useState(false);
  const handleFavClick = useCallback(() => {
    setIsFav((prevIsFav) => !prevIsFav);
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