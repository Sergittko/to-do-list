import style from "./TaskInput.module.scss";
import { useState, useMemo } from "react";
import { setNewTask, getTasks } from "../../../api/toDoApi";

const TaskInput = ({ tasksData, tasksChanged }) => {
  let [selectState, changeSelect] = useState("NoSection");
  let [textState, changeText] = useState("");
  let handleSubmit = (event) => {
    let title = event.target[0].value;
    let category = event.target[1].value;
    if (title.length > 1) {
      setNewTask(title.charAt(0).toUpperCase() + title.slice(1), category);
      tasksChanged(getTasks());
      // changeSelect("No section");
      changeText("");
    }
    event.preventDefault();
  };
  const keys = Object.keys(tasksData);

  return (
    <form className={style.input_container} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type task"
        autoFocus
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
