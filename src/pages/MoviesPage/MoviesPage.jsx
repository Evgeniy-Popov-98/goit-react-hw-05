import toast, { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getSearchMovies } from "../../sevices/API";

import clsx from "clsx";
import style from "./MoviesPage.module.css";

const MoviesPage = ({ onSubmit }) => {
  const [showList, setShowList] = useState("");
  const [arrMovies, setArrMovies] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const { search } = form.elements;
    if (search.value.length === 0) {
      toast.error("The input field is empty! Please write a word to search.", {
        icon: "😰",
      });
    } else {
      setShowList(search.value);
    }
  };

  useEffect(() => {
    async function getListMovies() {
      try {
        const data = await getSearchMovies(showList);
        setArrMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    getListMovies();
  }, [showList]);

  return (
    <>
      <div className={clsx(style.searcgBox)}>
        <form className={clsx(style.moviesForm)} onSubmit={handleSubmit}>
          <input
            className={clsx(style.moviesInput)}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search films and movies"
          />
          <button className={clsx(style.formButton)} type="submit">
            Search
          </button>
        </form>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      {showList.length !== 0 && (
        <div>
          <ul>
            {Array.isArray(arrMovies) &&
              arrMovies.map((item) => {
                return (
                  <li key={item.id}>
                    <NavLink to="/">{item.title}</NavLink>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
      {/* <Suspense>
        <Routes>
          <Route path="comments" />
        </Routes>
      </Suspense> */}
    </>
  );
};

export default MoviesPage;
