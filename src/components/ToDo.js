import style from "./ToDo.module.scss";
import Header from "./Header/Header";

const ToDo = () => {
  return (
    <div className={style.app}>
      <Header />
    </div>
  );
};

export default ToDo;
