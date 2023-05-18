import { StarRating } from "../StarRating/StarRating";
import s from "./style.module.css";

export const TVShowDetail = ({ tvShow }) => {
  const rating = tvShow.vote_average / 2;

  return (
    <div>
      <div className={s.title}>{tvShow.name}</div>
      <div className={s.rating_container}>
        <StarRating rating={rating} />
        <span className={s.rating}>{rating}/5</span>
      </div>
      <div className={s.overview}>{tvShow.overview}</div>
    </div>
  );
};
