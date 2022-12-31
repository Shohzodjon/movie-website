import "../styles/movie-card.css";
import { Link } from "react-router-dom";
// { data }
const MovieCard = ({ data }) => {
  return (
    <Link to={`/movie/:${data.id}`}>
      <div className="movie__card">
        <div className="card__img">
          <img src={data.poster} alt={data.cardType} />
        </div>
        <div className="card__info">
          <div className="info__header">
            <h3>{data.title}</h3>
            <span>{data.year}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default MovieCard;
