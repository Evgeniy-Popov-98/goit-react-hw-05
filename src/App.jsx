import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HeaderBox = lazy(() => import("./components/HeaderBox/HeaderBox"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviePage/MoviePage"));
const NotFoudPage = lazy(() => import("./pages/NotFoudPage/NotFoudPage"));

import "./App.css";

function App() {
  return (
    <>
      <HeaderBox />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="*" element={<NotFoudPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
