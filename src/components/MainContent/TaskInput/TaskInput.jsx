import style from "./TaskInput.module.scss";
import { useState, useMemo } from "react";
import { setNewTask, getTasks } from "../../../api/toDoApi";

const TaskInput = ({ tasksData, tasksChanged }) => {
  let [selectState, changeSelect] = useState("NoSection");
  let [textState, changeText] = useState("");
  let handleSubmit = (event) => {
    let title = event.target[0].value;
    let category = event.target[1].value;
    setNewTask(title, category);
    tasksChanged(getTasks());
    changeSelect("NoSection");
    changeText("");
    event.preventDefault();
  };
  const keys = Object.keys(tasksData);

  return (
    <form className={style.input_container} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type task"
        value={textState}
        onChange={(e) => changeText(e.target.value)}
      />
      <select
        name="user_profile_color_1"
        value={selectState}
        onChange={(e) => changeSelect(e.target.value)}
      >
        {keys.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default TaskInput;
