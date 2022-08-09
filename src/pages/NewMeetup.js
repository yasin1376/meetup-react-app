import { useRef } from "react";

const NewMeetup = () => {
  const titleInput = useRef();
  const imageInput = useRef();
  const addressInput = useRef();
  const descriptionInput = useRef();

  const submiteMeetup = (e) => {
    e.preventDefault();
    const meetupData = {
      title: titleInput.current.value,
      image: imageInput.current.value,
      address: addressInput.current.value,
      description: descriptionInput.current.value,
    };

    console.log(meetupData);
  };

  return (
    <div className="w-2/3 sm:w-1/2 md:w-1/2 mx-auto mt-5">
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            required
            placeholder="Title"
            ref={titleInput}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Meetup Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="url"
            required
            placeholder="Meetup Image Url"
            ref={imageInput}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            required
            placeholder="Meetup Address"
            ref={addressInput}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            placeholder="Description"
            id="description"
            rows={5}
            ref={descriptionInput}
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <button
          className="w-100 bg-gray-800 text-white px-3 py-2 rounded"
          onClick={submiteMeetup}
        >
          Add Meetup
        </button>
      </form>
    </div>
  );
};

export default NewMeetup;
