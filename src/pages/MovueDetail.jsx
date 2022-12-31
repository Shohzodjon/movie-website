import { useEffect, useState } from "react";
import axios from "../api";
import formatDate from "../dateFormat";
import { useParams } from "react-router-dom";
import "../styles/movie-slug.css";
const MovieSlug = () => {
  const param = useParams();
  const [back, setBack] = useState([]);
  useEffect(() => {
    axios.get(`/movie-list?id=${param.id}`).then((res) => {
      setBack(res.data);
    });
  });
  return (
    <section>
      <div className="container">
        <div className="slug__box">
          <div className="movie__img">
            <img src={back.poster} alt={back.title} />
          </div>
          <div className="slug__info">
            <h3>{back.title}</h3>
            <p>{back.description}</p>
            <ul>
              {back.genres?.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
            <span> Created : {formatDate(back.created_at)}</span>
          </div>
        </div>
        <div className="team__member">
          <div>
            <ul>
              {back.people?.map((person, i) => (
                <li key={i}>
                  <div>
                    <p className="member__position">{person.post}</p>
                    <ul className="team__card">
                      {person.employees?.map((employ) => (
                        <li key={employ.id}>
                          <div className="team__img">
                            <img src={employ.photo} alt={employ.full_name} />
                          </div>
                          <p className="member__name">{employ.full_name}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MovieSlug;
