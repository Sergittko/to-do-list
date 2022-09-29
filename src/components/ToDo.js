import style from "./ToDo.module.scss";
import Header from "./Header/Header";
import Categories from "./MainContent/Categories/Categories";

const ToDo = () => {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.main_content}>
        <Categories />
      </div>
    </div>
  );
};

export default ToDo;
