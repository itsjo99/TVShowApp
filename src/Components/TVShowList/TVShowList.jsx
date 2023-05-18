import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";

export const TVShowList = ({ tvShowList, onClickItem }) => {
  return (
    <div>
      <div className={s.title}>You'll probably like:</div>
      <div className={s.list}>
        {tvShowList.map((tvshow) => {
          return (
            <span className={s.tv_show_item} key={tvshow.id}>
              <TVShowListItem tvShow={tvshow} onClick={onClickItem} />
            </span>
          );
        })}
      </div>
    </div>
  );
};
