import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../sevices/API";

const MovieCast = () => {
  const { moviesId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    async function getInfoMoviesCast() {
      try {
        const data = await getMovieCast(moviesId);
        setMovieCast(data);
      } catch (error) {
        console.log("error: ", error);
      } finally {
        console.log();
      }
    }

    getInfoMoviesCast();
  }, [moviesId]);

  console.log(movieCast);

  return <h1>Hello</h1>;
};
export default MovieCast;
