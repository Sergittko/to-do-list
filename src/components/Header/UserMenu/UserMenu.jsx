import style from "./UserMenu.module.scss";
import { useState } from "react";
import { getTasks, getName, setName, setUserImage } from "../../../api/toDoApi";

const UserMenu = (props) => {
  let userName = getName();
  let [name, setNameInput] = useState(userName);

  let handleSubmit = (event) => {
    let file = event.target[0].value;
    let name = event.target[1].value;

    if(!!file){
      setUserImage(file);
      props.menuMode(false);
    }

    if (name.length > 1 && userName !== name) {
      setName(name.charAt(0).toUpperCase() + name.slice(1));
      props.menuMode(false);
      props.newName(getName());
      setNameInput("");
    }
    if (name.length === 0) {
      props.menuMode(false);
    }
    event.preventDefault();
  };
  return (
    <div
      className={style.menu_container}
      id="outer"
      onClick={(e) => {
        if (e.target.id === "outer") props.menuMode(false);
      }}
    >
      <div className={style.menu}>
        <h1>User settings</h1>
        <form onSubmit={handleSubmit}>
          <span>Change photo:</span>
          <input type="file" name="" id="" />
          <span>Change name:</span>
          <input
            type="text"
            placeholder="Type new name"
            autoFocus
            value={name}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default UserMenu;
