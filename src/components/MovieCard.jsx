import "../styles/movie-card.css";

const MovieCard = ({ data }) => {
  return (
    <div className="movie__card">
      <div className="card__img">
        <img src={data.poster} alt={data.cardType} />
      </div>
      <div className="card__info">
        <div className="info__header">
          <h3>{data.title}</h3>
          <span>{data.year}</span>
        </div>
        <ul className="card__geners">
          {data.genres.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default MovieCard;
