import style from "./TasksContainer.module.scss";

const TasksContainer = ({ chosenCategory }) => {
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
        title: "1sdfsdf2",
        isDone: true,
        creared: "30.09.22",
      },
      {
        title: "12psodkf3",
        isDone: true,
        creared: "30.09.22",
      },
      {
        title: "12sdiu iuh iuh34",
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

  function mergeArrays(data) {
    let keys = Object.keys(data);
    let mergedArrays = [];
    keys.forEach((item) => {
      mergedArrays = [...mergedArrays, ...data[item]];
    });
    return mergedArrays;
  }

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
      {chosenCategory === "all"
        ? mergeArrays(tasksData).map((item) => {
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
          })
        : tasksData[chosenCategory].map((item) => {
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
    </section>
  );
};

export default TasksContainer;
