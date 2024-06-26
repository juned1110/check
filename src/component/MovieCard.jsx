import React from "react";

const MovieCard = ({ movie, viewDetails }) => {
  return (
    <div
      className="p-2 m-2 rounded-lg shadow-xl mb-5 mt-10 bg-[#dddada] border-4 border-solid border-zinc-100 hover:border-slate-300"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
      }}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-64 object-cover rounded-[30px] transition-transform transform hover:scale-110"
        style={{
          boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
        }}
      />
      <h2 className="text-xl ml-3 mt-5 font-bold">{movie.Title}</h2>
      <p className="font-bold ml-3">{movie.Year}</p>
      <button
        onClick={() => viewDetails(movie.imdbID)}
        className="bg-blue-500 text-white p-2 rounded-md mt-2 ml-3 font-bold mb-3 hover:bg-blue-400"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
        }}
      >
        Details
      </button>
    </div>
  );
};

export default MovieCard;
