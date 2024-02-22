import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
  const { topics, isFavorited } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__right">
        <TopicList topics={topics} />
        <FavBadge isFavPhotoExist={isFavorited} />
      </div>
    </div>
  );
};

export default TopNavigation;
