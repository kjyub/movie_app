import React from "react";
import PropTypes from "prop-types";

function Movie({ year, title, summary, poster, rating, genres }) {
  return (
    <div
      class="movie w-full border-b border-indigo-200 p-4 flex h-64 justify-between"
      alt={title}
      title={title}
    >
      <div class="w-full">
        <div class="flex mb-4 justify-between border-b border-indigo-300">
          <div class="flex">
            <span class="font-bold text-indigo-600 text-lg">{title}</span>
            <span class="text-sm text-gray-500 ml-2 my-auto"> {year} </span>
            <ul class="flex">
              {genres.map((genre, i) => (
                <li key={i} class="my-auto ml-2 text-sm text-gray-700">
                  {genre}
                </li>
              ))}
            </ul>
          </div>
          <span class="text-md text-orange-500 object-right my-auto">
            {" "}
            Rating : {rating}{" "}
          </span>
        </div>
        <div class="px-2 pb-4">
          <p class="">
            {summary.slice(0, 900)}
            {summary.length >= 900 ? "..." : ""}
          </p>
        </div>
      </div>
      {/* <div class="bg-center border-2 w-64" style={{ backgroundImage: "url(" + poster + ")" }}>
        </div> */}
      <img class="bg-contain bg-center ml-8" src={poster} />
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Movie;
