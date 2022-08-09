const NewMeetup = () => {
  const submiteMeetup = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-2/3 sm:w-1/2 md:w-1/2 mx-auto mt-5">
      <form>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
            Title
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            required
            placeholder="Title"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="image">
            Meetup Image
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="url"
            required
            placeholder="Meetup Image Url"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="address"
          >
            Address
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            required
            placeholder="Meetup Address"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="description"
          >
            Description
          </label>
          <textarea
            placeholder="Description"
            id="description"
            rows={5}
            class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
