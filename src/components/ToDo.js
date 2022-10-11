import { useEffect, useState } from "react";
import style from "./ToDo.module.scss";
import Header from "./Header/Header";
import Categories from "./MainContent/Categories/Categories";
import TasksContainer from "./MainContent/Tasks/TasksContainer";
import TaskInput from "./MainContent/TaskInput/TaskInput";
import LoginWindow from "./LoginWindow/LoginWindow";
import { getUserName } from "../api/toDoApi";

const ToDo = () => {
  let [name, nameChanged] = useState(getUserName());
  let [chosenCategory, changeCategory] = useState("All tasks");
  return (
    <div>
      {name === null ? (
        <LoginWindow nameChanged={nameChanged} />
      ) : (
        <div className={style.app}>
          <Header name={name} />
          <div className={style.main_content}>
            <Categories changeCategory={changeCategory} />
            <TasksContainer chosenCategory={chosenCategory} />
            <TaskInput />
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDo;
