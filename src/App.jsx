import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HeaderBox = lazy(() => {
  "./components/HeaderBox/HeaderBox";
});

import "./App.css";

function App() {
  return (
    <>
      <HeaderBox />
      <Suspence>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="*" element={<NotFoudPage />}></Route>
        </Routes>
      </Suspence>
    </>
  );
}

export default App;
