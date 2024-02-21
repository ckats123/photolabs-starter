import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { modalVisibility, setModalVisibility } = props;
  if (!modalVisibility) {
    return null;
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={() => setModalVisibility(false)} />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
