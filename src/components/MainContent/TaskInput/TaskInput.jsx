import style from "./TaskInput.module.scss";

const TaskInput = () => {
  return (
    <div>
      <input type="text" />
      <select name="user_profile_color_1">
        <option value="1">Work</option>
        <option value="2">No Section</option>
      </select>
    </div>
  );
};

export default TaskInput;
