import style from "./UserMenu.module.scss";
import { useState } from "react";
import { setNewCategory, getTasks, getName } from "../../../api/toDoApi";

const UserMenu = (props) => {
  let [name, setName] = useState(getName());

  let handleSubmit = (event) => {
    let name = event.target[1].value;
    console.log(name);
    if (name.length > 1) {
      // setNewCategory(name.charAt(0).toUpperCase() + name.slice(1));
      props.menuMode(false);
      // props.tasksChanged(getTasks());
      // setName("");
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
            onChange={(e) => setName(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default UserMenu;
