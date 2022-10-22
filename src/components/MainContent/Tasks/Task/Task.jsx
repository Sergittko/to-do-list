import style from "./Task.module.scss";
import { setTaskDone, getTasks } from "../../../../api/toDoApi";

const Task = ({ title, isDone, creared, category, id, tasksChanged }) => {
  let checkBoxStyle = {
    backgroundColor: "#31d255",
    border: "2px solid #38a150",
  };
  let doneTaskStyle = {
    backgroundColor: "rgb(0 0 0 / 7%)",
    // filter: 'brightness(0.7)',
    borderRadius: "10px",
    color: "#797b82",
    border: "2px solid #262a3f",
  };
  let handleTaskClick = (category, id) => {
    setTaskDone(category, id);
    tasksChanged(getTasks());
  }
  return (
    <div
      className={style.task}
      className={style.task}
      style={isDone ? doneTaskStyle : null}
    >
      <div className={style.text_block}>
        <span
          style={isDone ? checkBoxStyle : null}
          id={id}
          onClick={(e) => handleTaskClick(category, +e.target.id)}
        ></span>
        <p>{title}</p>
      </div>
      <div className={style.info_block}>
        <span>{creared}</span>
        <span>{category}</span>
      </div>
    </div>
  );
};

export default Task;
