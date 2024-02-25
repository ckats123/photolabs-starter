import React, { useCallback, useState , useEffect} from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { photos, favoritedPhotos, updateToFavPhotoIds } = props;

  const [isFav, setIsFav] = useState(
    favoritedPhotos.some((photo) => photo.id === photos.id)
  );


  useEffect(() => {
    setIsFav(
      favoritedPhotos.some((photo) => photo.id === photos.id)
    );
  }
  , [favoritedPhotos, photos.id]);


  const handleFavClick = useCallback(() => {
    updateToFavPhotoIds(photos.id);
  }, [updateToFavPhotoIds, photos.id]);


  return (
    <div className="photo-list__fav-icon" onClick = {handleFavClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon isFav={isFav} />
      </div>
    </div>
  );
}

export default PhotoFavButton;