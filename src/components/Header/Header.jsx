import style from "./Header.module.scss";
import { useState, useEffect } from "react";
import defaultImage from "../../assets/defaultUser.png";
import toDo from "../../assets/toDo-Icon.png";
import UserMenu from "./UserMenu/UserMenu";
import { getName } from "../../api/toDoApi";

const Header = (props) => {
  let [menu, menuMode] = useState(false);
  let [name, newName] = useState(getName());
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

  useEffect(() => {
    if (menu) document.body.style.overflow = 'hidden';
    if (!menu) document.body.style.overflow = 'unset';
  }, [menu])

  return (
    <div className={style.hedaer_container}>
      <div className={style.hedaer_content}>
        <img src={toDo} alt="toDo-logo" />
        <div className={style.date}>
          <p>Hi,{name}</p>
          <time>
            {day}, {date}
          </time>
        </div>
        <img src={defaultImage} alt="" onClick={() => menuMode(true)} />
        {menu ? <UserMenu menuMode={menuMode} newName={newName} /> : null}
      </div>
    </div>
  );
};

export default Header;
