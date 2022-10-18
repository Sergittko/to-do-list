import style from "./TaskInput.module.scss";
import { useState } from "react";
import { setNewTask } from "../../../api/toDoApi";

const TaskInput = () => {
  let [selectState, changeSelect] = useState("NoSection");
  let [textState, changeText] = useState("");

  let handleSubmit = (event) => {
    let title = event.target[0].value;
    let category = event.target[1].value;
    setNewTask(title, category);
    changeSelect("NoSection");
    changeText("");
    event.preventDefault();
  };
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
        <option value="Work">Work</option>
        <option value="NoSection">No Section</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default TaskInput;
