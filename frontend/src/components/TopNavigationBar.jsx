import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
  const { topics, isFavorited , onTopicLoad } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
        <TopicList topics={topics} onTopicLoad={onTopicLoad} />
        <FavBadge isFavPhotoExist={isFavorited} />
      </div>
    // </div>
  );
};

export default TopNavigation;
