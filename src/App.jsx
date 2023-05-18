import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import s from "./style.module.css";
import { backdrop_url } from "./config";
import { TVShowDetail } from "./Components/TVShowDetail/TVShowDetail";
import { Logo } from "./Components/Logo/Logo";
import logoImg from "./Assets/Images/logo.png";
import { TVShowList } from "./Components/TVShowList/TVShowList";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { Trailer } from "./Components/Trailer/Trailer";

export const App = () => {
  const [currTVShow, setTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);
  const [tvTrailer, setTrailer] = useState();

  useEffect(() => {
    (async () => {
      try {
        const popularTVShowList = await TVShowAPI.fetchPopulars();
        if (popularTVShowList.length > 0) {
          setTVShow(popularTVShowList[0]);
        }
      } catch (error) {
        alert("Something went wrong");
      }
    })();
  }, []);

  useEffect(() => {
    if (currTVShow) {
      (async (tvShowId) => {
        try {
          const RecommendationList = await TVShowAPI.fetchRecommendations(
            tvShowId
          );
          if (RecommendationList.length > 0) {
            setRecommendationList(RecommendationList.slice(0, 10));
          }
        } catch (err) {
          alert("Something went wrong");
        }
      })(currTVShow.id);
    }
  }, [currTVShow]);

  const fetchByTitle = async (title) => {
    try {
      const searchResponse = await TVShowAPI.fetchByTitle(title);
      if (searchResponse.length > 0) {
        setTVShow(searchResponse[0]);
      }
    } catch (err) {
      alert("Something went wrong");
    }
  };

  function updateCurrentTVShow(tvshow) {
    setTVShow(tvshow);
  }

  useEffect(() => {
    if (currTVShow) {
      (async (tvShowId) => {
        try {
          const trailerDetails = await TVShowAPI.fetchTrailer(tvShowId);
          if (trailerDetails.length > 0) {
            setTrailer(trailerDetails[0]);
          } else setTrailer(error);
        } catch (err) {
          alert("Something went wrong");
        }
      })(currTVShow.id);
    }
  }, [currTVShow]);
  const error = "Trailer not available";
  return (
    <div
      className={s.main_container}
      style={{
        background: currTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),url("${backdrop_url}${currTVShow.backdrop_path}") no-repeat center / cover`
          : "red",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={logoImg}
              title="WatchPipe"
              subtitle="The best shows picked for you"
            />
          </div>
          <div className="col-md12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        <div className={s.tv_show_title}>
          {currTVShow && <TVShowDetail tvShow={currTVShow} />}
        </div>
        <div>
          {tvTrailer && currTVShow && (
            <Trailer
              onLoad={
                tvTrailer.key !== undefined
                  ? tvTrailer
                  : "Trailer not available"
              }
            />
          )}
        </div>
      </div>
      <div className={s.recommended_tv_shows}>
        {currTVShow && (
          <TVShowList
            onClickItem={updateCurrentTVShow}
            tvShowList={recommendationList}
          />
        )}
      </div>
    </div>
  );
};
