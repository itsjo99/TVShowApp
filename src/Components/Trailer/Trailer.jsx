import s from "./style.module.css";
import { base_url_youtube } from "../../config";

export const Trailer = ({ onLoad }) => {
  return (
    <div className={s.container}>
      <div className={s.title}>Watch the previews: </div>
      <iframe
        className={s.trailer}
        height={270}
        width={480}
        src={`${base_url_youtube}${onLoad.key}`}
      ></iframe>
    </div>
  );
};
