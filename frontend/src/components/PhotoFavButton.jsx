import React, { useCallback, useState , useEffect} from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { photos, favoritedPhotos, addFavoritedPhoto } = props;

  const [isFav, setIsFav] = useState(
    favoritedPhotos.some((photo) => photo.id === photos.id)
  );

  useEffect(() => {
    setIsFav(favoritedPhotos.some((photo) => photo.id === photos.id));
  }
  , [favoritedPhotos, photos.id]);
  

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