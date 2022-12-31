import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import ReactPaginate from "react-paginate";
import "../styles/home.css";
import axios from "../api";
const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const Home = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  window.addEventListener("load", function () {
    let pageItem = localStorage.getItem("dataKey");
    setPage(pageItem);
  });

  const handleClick = (id) => {
    setPage(id);
    localStorage.setItem("dataKey", JSON.stringify(id));
  };

  useEffect(() => {
    axios.get(`/movie-list?page=${page}&items=20`).then((res) => {
      setList(res.data.data.movieList);
    });
  }, [page]);

  return (
    <div>
      <div className="movie__card-flex">
        {list.map((item) => (
          <MovieCard data={item} key={item.id} />
        ))}
      </div>

      <div>
        <ul className="pagination">
          {arr.map((item) => (
            <li
              key={item}
              onClick={() => handleClick(item)}
              className={page == item ? "active-page" : ""}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
