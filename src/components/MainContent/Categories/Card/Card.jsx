import style from "./Card.module.scss";
import preset from "../../../../assets/preset.png";
import trashIcon from "../../../../assets/trash_white.svg";
import { deleteCategory, getTasks } from "../../../../api/toDoApi";

const Card = ({
  name,
  radius,
  circleStyle,
  percent,
  changeCategory,
  tasksChanged,
}) => {
  let handleDeleteCategory = () => {
    deleteCategory(name);
    changeCategory("No section");
    tasksChanged(getTasks);
  };

  return (
    <div
      className={style.category_wrapper}
      onClick={(e) => {
        if (!e.target.dataset.position) changeCategory(name);
      }}
    >
      <div className={style.background_image}>
        <img src={preset} alt="" />
      </div>
      <span>{name}</span>
      <div className={style.progress_wrapper}>
        <svg className={style.progress_ring} width="100" height="100">
          <circle
            className={style.progress_ring__circle}
            stroke="#c6e5d7"
            strokeWidth="10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
          />
          <circle
            className={style.progress_ring__circle}
            stroke="#31d255"
            strokeWidth="10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            style={circleStyle}
          />
        </svg>
        <span>{percent}%</span>
      </div>
      {!!tasksChanged && name !== "No section" ? (
        <div
          className={style.delete_block}
          onClick={() => handleDeleteCategory()}
          data-position="deleteContainer"
        >
          <img src={trashIcon} data-position="deleteImage" alt="" />
        </div>
      ) : null}
    </div>
  );
};

export default Card;
