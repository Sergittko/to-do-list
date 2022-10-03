import style from "./ToDo.module.scss";
import Header from "./Header/Header";
import Categories from "./MainContent/Categories/Categories";
import TasksContainer from "./MainContent/Tasks/TasksContainer";

const ToDo = () => {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.main_content}>
        <Categories />
        <TasksContainer />
      </div>
    </div>
  );
};

export default ToDo;
