import { useListMovies } from "../../hooks/useListMovies";

const HomePage = () => {
  const { topMovies } = useListMovies();

  return (
    <div>
      <ul>
        {Array.isArray(topMovies) &&
          topMovies.map((item) => {
            return (
              <ImageCard
                key={item.id}
                dataImages={item}
                openModal={openModal}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default HomePage;
