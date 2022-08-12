import React from "react";

const MeetupItem = ({ meetup }) => {
  return (
    <div>
      <img src={meetup.image} alt={meetup.title} />
      <p>{meetup.title}</p>
    </div>
  );
};

export default MeetupItem;
