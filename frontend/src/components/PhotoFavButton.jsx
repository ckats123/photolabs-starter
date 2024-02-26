import React, { useCallback, useState , useEffect} from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  //where does photos come from?
  // mocks/phcotos.js 
 // but you used photoData to pass the single photo down 
  const { photoData, favoritedPhotos, updateToFavPhotoIds } = props;

  const [isFav, setIsFav] = useState(
  favoritedPhotos.some((photo) => photo.id === photoData.id)
  );


  useEffect(() => {
    setIsFav(
      favoritedPhotos.some((photo) => photo.id === photoData.id)
    );
  }
  , [favoritedPhotos, photoData.id]);

  const handleFavClick = useCallback(() => {
    updateToFavPhotoIds(photoData.id);
  }, [updateToFavPhotoIds, photoData.id]);


  return (
    <div className="photo-list__fav-icon" onClick = {handleFavClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon isFav={isFav} />
      </div>
    </div>
  );
}

export default PhotoFavButton;