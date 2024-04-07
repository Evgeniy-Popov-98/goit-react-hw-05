import { Suspense, lazy, useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import clsx from "clsx";

const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../../components/MovieReviews/MovieReviews")
);

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
    <div className={clsx(style.details)}>
      <button className={clsx(style.detailsButton)} type="button">
        ⬅ Go back
      </button>
      <div className={clsx(style.detailsBox)}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${itemCardMovie.backdrop_path}`}
          alt=""
        />
        <div>
          <h2>{itemCardMovie.original_title}</h2>
          <p>
            User Score:{" "}
            {itemCardMovie.length !== 0 &&
              itemCardMovie.vote_average.toFixed(2)}
            %
          </p>
          <h3>Overview</h3>
          <p>{itemCardMovie.overview}</p>
          <p>Genres</p>
          <ul className={clsx(style.genresList)}>
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
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense>
          <Routes>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
