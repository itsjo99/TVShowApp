import s from "./style.module.css";
import { small_backdrop_url } from "../../config";

export const TVShowListItem = ({ tvShow, onClick }) => {
  const onClick_ = () => {
    onClick(tvShow);
  };
  const MAX_TITLE_LENGTH = 20;

  return (
    <div onClick={onClick_} className={s.container}>
      <img
        src={small_backdrop_url + tvShow.backdrop_path}
        alt={tvShow.name}
        className={s.img}
      />
      <div className={s.title}>
        {tvShow.name.length > MAX_TITLE_LENGTH
          ? tvShow.name.slice(0, MAX_TITLE_LENGTH) + "..."
          : tvShow.name}
      </div>
    </div>
  );
};
