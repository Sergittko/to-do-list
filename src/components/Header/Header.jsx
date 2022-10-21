import style from "./Header.module.scss";
import defaultImage from "../../assets/defaultUser.png";
import toDo from "../../assets/toDo-Icon.png";
import UserMenu from "./UserMenu/UserMenu";
import { useState } from "react";

const Header = (props) => {
  let [menu, menuMode] = useState(false);
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
        <img src={defaultImage} alt="" onClick={()=>menuMode(true)}/>
        {menu?<UserMenu/>:null}
      </div>
    </div>
  );
};

export default Header;
