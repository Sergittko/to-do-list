import style from "./TasksContainer.module.scss";

const TasksContainer = ({ chosenCategory }) => {
  const tasksData = {
    Work: [
      {
        title: "Make todo",
        isDone: true,
        creared: "30.09.22",
        category: 'Work'
      },
      {
        title: "1",
        isDone: false,
        creared: "1.10.22",
        category: 'Work'
      },
      {
        title: "1sdfsdf2",
        isDone: true,
        creared: "30.09.22",
        category: 'Work'
      },
      {
        title: "12psodkf3",
        isDone: true,
        creared: "02.10.22",
        category: 'Work'
      },
      {
        title: "12sdiu iuh iuh34",
        isDone: true,
        creared: "04.10.22",
        category: 'Work'
      },
    ],
    NoSection: [
      {
        title: "12",
        isDone: false,
        creared: "today",
        category: 'No section'
      },
      {
        title: "123",
        isDone: true,
        creared: "yesterday",
        category: 'No section'
      },
      {
        title: "1234",
        isDone: true,
        creared: "30.09.22",
        category: 'No section'
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
                  <span>{item.category}</span>
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
                  <span>{item.category}</span>
                </div>
              </div>
            );
          })}
    </section>
  );
};

export default TasksContainer;
