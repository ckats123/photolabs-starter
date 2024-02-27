import React from "react";

import "../styles/TopicListItem.scss";

// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };

const TopicListItem = (props) => {

  const { data, onClosePhotoDetailsModal } = props;
  const handleTopicClick = () => {
    onClosePhotoDetailsModal(data);
  };

  return <div className="topic-list__item">
    <span onClick={handleTopicClick}>{data.title}</span>
  </div>;
};

export default TopicListItem;
