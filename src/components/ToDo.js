import style from "./ToDo.module.scss";
import Header from "./Header/Header";
import Categories from "./MainContent/Categories/Categories";
import TasksContainer from "./MainContent/Tasks/TasksContainer";
import TaskInput from "./MainContent/TaskInput/TaskInput";

const ToDo = () => {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.main_content}>
        <Categories />
        <TasksContainer />
        <TaskInput />
      </div>
    </div>
  );
};

export default ToDo;
