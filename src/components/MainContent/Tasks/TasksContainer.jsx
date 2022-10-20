import style from "./TasksContainer.module.scss";

const TasksContainer = ({ chosenCategory, tasksData }) => {
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
      <h2>{chosenCategory}</h2>
      {mergeArrays(tasksData).length === 0 ? (
        <h3>No tasks added</h3>
      ) : chosenCategory === "All tasks" ? (
        mergeArrays(tasksData).map((item, index) => {
          return (
            <div
              className={style.task}
              key={item.title + index}
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
      ) : tasksData[chosenCategory].length === 0 ? (
        <h3>No tasks added</h3>
      ) : (
        tasksData[chosenCategory].map((item, index) => {
          return (
            <div
              className={style.task}
              key={item.title + index}
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
      )}
    </section>
  );
};

export default TasksContainer;
