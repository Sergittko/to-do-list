import style from "./TaskInput.module.scss";
import { useState } from "react";
const TaskInput = () => {
  let [selectState, changeSelect] = useState('No Section');
  let [textState, changeText] = useState("");

  let handleSubmit = (event) => {
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    changeSelect('No Section');
    changeText('');
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
      <select name="user_profile_color_1"
              value={selectState}
              onChange={(e) => changeSelect(e.target.value)}>
        <option value="Work">Work</option>
        <option value="No Section">No Section</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default TaskInput;
