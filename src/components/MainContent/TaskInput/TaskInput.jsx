import style from "./TaskInput.module.scss";

const TaskInput = () => {
  return (
    <div className={style.input_container}>
      <input type="text" placeholder="Type task" />
      <select name="user_profile_color_1">
        <option value="1">Work</option>
        <option value="2">No Section</option>
      </select>
      <button>Submit</button>
    </div>
  );
};

export default TaskInput;
