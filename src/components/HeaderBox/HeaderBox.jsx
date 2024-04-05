import { NavLink } from "react-router-dom";

const HeaderBox = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </div>
  );
};

export default HeaderBox;
