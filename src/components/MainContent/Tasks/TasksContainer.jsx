import style from "./TasksContainer.module.scss";

const TasksContainer = () => {
  const tasksData = {
    Work: [
      {
        title: "Make todo",
        isDone: true,
        creared: "30.09.22",
      },
      {
        title: "1",
        isDone: false,
        creared: "30.09.22",
      },
      {
        title: "12",
        isDone: true,
        creared: "30.09.22",
      },
      {
        title: "123",
        isDone: true,
        creared: "30.09.22",
      },
      {
        title: "1234",
        isDone: true,
        creared: "30.09.22",
      },
    ],
    NoSection: [
      {
        title: "12",
        isDone: false,
        creared: "30.09.22",
      },
      {
        title: "123",
        isDone: true,
        creared: "30.09.22",
      },
      {
        title: "1234",
        isDone: true,
        creared: "30.09.22",
      },
    ],
  };

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

  return (
    <section className={style.section_container}>
      <h2>Tasks</h2>
      {tasksData.Work.map((item) => {
        return (
          <div
            className={style.task}
            key={item.title}
            className={style.task}
            style={item.isDone ? doneTaskStyle : null}
          >
            <div className={style.text_block}>
              <span style={item.isDone ? checkBoxStyle : null}></span>
              <p>{item.title}</p>
            </div>
            <div className={style.info_block}>
              <span>{item.creared}</span>
              <span>Work</span>
            </div>
          </div>
        );
      })}
      <div className={style.task}>
        <div className={style.text_block}>
          <span></span>
          <p>Deploy Memory game</p>
        </div>
        <div className={style.info_block}>
          <span>today</span>
          <span>Work</span>
        </div>
      </div>
      <div className={style.task}>
        <div className={style.text_block}>
          <span></span>
          <p>Do house work</p>
        </div>
        <div className={style.info_block}>
          <span>29.09.22</span>
          <span>No Section</span>
        </div>
      </div>
    </section>
  );
};

export default TasksContainer;
