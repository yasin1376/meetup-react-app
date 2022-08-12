import React from "react";

const MeetupItem = ({ meetup }) => {
  return (
    <div className="bg-gray-300 m-3 rounded">
      <img
        className="object-contain rounded-t"
        src={meetup.image}
        alt={meetup.title}
      />
      <div className="p-3">
        <span className="font-bold">{meetup.title}</span>
        <span> - {meetup.address}</span>
        <p>{meetup.description}</p>
      </div>
    </div>
  );
};

export default MeetupItem;
