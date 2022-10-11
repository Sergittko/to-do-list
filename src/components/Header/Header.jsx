import style from "./Header.module.scss";
import defaultImage from "../../assets/defaultUser.png";
import toDo from "../../assets/toDo-Icon.png";

const Header = (props) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  let day = weekday[d.getDay()];
  let date = d.getDate();

  return (
    <div className={style.hedaer_container}>
      <div className={style.hedaer_content}>
        <img src={toDo} alt="toDo-logo" />
        <div className={style.date}>
          <p>Hi,{props.name}</p>
          <time>
            {day}, {date}
          </time>
        </div>
        <img src={defaultImage} alt="" />
      </div>
    </div>
  );
};

export default Header;
