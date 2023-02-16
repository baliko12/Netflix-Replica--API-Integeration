import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "../../requests";
import movieTrailer from "movie-trailer";
import axios from "../../axios";

const base_url = "https://image.tmdb.org/t/p/original/";
function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      //   console.log(request.data.results);
      setMovie(
        request?.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  // console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  const handleClick = (movie) => {
    trailerUrl
      ? setTrailerUrl("")
      : movieTrailer(movie?.title || movie?.name || movie.original_name)
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          })
          .catch((error) => console.log(error));
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${base_url}${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie.name || movie.original_name}
        </h1>
        <div className="banner__buttons">
          <button onClick={() => handleClick(movie)} className="banner__button">
            Play
          </button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
