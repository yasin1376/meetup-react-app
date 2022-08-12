import { useState, useEffect } from "react";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-meetup-app-4e702-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        console.log(meetups);
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  return (
    <div className="w-2/3 sm:w-1/2 md:w-1/2 mx-auto mt-5">
      <h1>All Meetups</h1>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <ul>
          {loadedMeetups.map((meetup) => {
            return <li key={meetup.id}>{meetup.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};
export default AllMeetups;
