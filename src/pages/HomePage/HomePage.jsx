import { NavLink } from "react-router-dom";
import { useListMovies } from "../../hooks/useListMovies";

const HomePage = () => {
  const { topMovies } = useListMovies();

  return (
    <div>
      <ul>
        {Array.isArray(topMovies) &&
          topMovies.map((item) => {
            return (
              <li key={item.id}>
                <NavLink to="/">{item.title}</NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default HomePage;
