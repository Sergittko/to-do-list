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
    backgroundColor: 'green'
  }
  let doneTaskStyle = {
    filter: 'brightness(0.7)',
    backgroundColor: 'rgb(0 0 0 / 7%)'
  }

  return (
    <section className={style.section_container}>
      <h2>Tasks</h2>
      {tasksData.Work.map((item) => {
        return (
          <div key={item.title}
               className={style.tasks_container}
               style={item.isDone? doneTaskStyle : null}>
            <div className={style.task}>
              <div className={style.text_block}>
                <span style={item.isDone? checkBoxStyle : null}></span>
                <p>{item.title}</p>
              </div>
              <div className={style.info_block}>
                <span>{item.creared}</span>
                <span>Work</span>
              </div>
            </div>
          </div>
        )
      })}
      <div className={style.tasks_container}>
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
      </div>
      <div className={style.tasks_container}>
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
      </div>
    </section>
  );
};

export default TasksContainer;
