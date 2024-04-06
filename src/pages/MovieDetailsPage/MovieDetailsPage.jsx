import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import clsx from "clsx";

import { getDetailsMovies } from "../../sevices/API";
import style from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const [itemCardMovie, setItemCardMovie] = useState([]);

  useEffect(() => {
    async function getItemMovies() {
      try {
        const data = await getDetailsMovies(moviesId);
        setItemCardMovie(data);
      } catch (error) {
        console.log("error: ", error);
      } finally {
        console.log();
      }
    }

    getItemMovies();
  }, [moviesId]);
  console.log(itemCardMovie);
  return (
    <div>
      <button type="button">⬅ Go back</button>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${itemCardMovie.backdrop_path}`}
          alt=""
        />
        <div>
          <h2>{itemCardMovie.original_title}</h2>
          <p>{itemCardMovie.popularity}</p>
          <h3>Overview</h3>
          <p>{itemCardMovie.overview}</p>
          <p>Genres</p>
          <ul>
            {Array.isArray(itemCardMovie.genres) &&
              itemCardMovie.genres.map((item) => {
                return <li key={item.id}>{item.name}</li>;
              })}
          </ul>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
