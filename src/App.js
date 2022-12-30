import { useState } from "react";
import "./styles/app.css";
import backend from "./data";
import MovieCard from "./components/MovieCard";
function App() {
  const [list, setList] = useState(backend);
  return (
    <section className="">
      <div className="container">
        <h2>Movie website</h2>
        <div className="movie__card-flex">
          {list.map((item) => (
            <MovieCard data={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
