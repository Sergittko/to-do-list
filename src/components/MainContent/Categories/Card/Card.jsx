import style from "./Card.module.scss";
import preset from "../../../../assets/preset.png";

const Card = ({ name, radius, circleStyle, percent }) => {
  return (
    <div className={style.category_wrapper}>
      <img src={preset} alt="" />
      <span>{name}</span>
      <div className={style.progress_wrapper}>
        <svg className={style.progress_ring} width="120" height="120">
          <circle
            className={style.progress_ring__circle}
            stroke="#c6e5d7"
            strokeWidth="10"
            cx="60"
            cy="60"
            r={radius}
            fill="transparent"
          />
          <circle
            className={style.progress_ring__circle}
            stroke="#31d255"
            strokeWidth="10"
            cx="60"
            cy="60"
            r={radius}
            fill="transparent"
            style={circleStyle}
          />
        </svg>
        <span>{percent}%</span>
      </div>
    </div>
  );
};

export default Card;
