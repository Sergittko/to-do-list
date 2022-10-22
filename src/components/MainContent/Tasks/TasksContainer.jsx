import style from "./TasksContainer.module.scss";
import Task from "./Task/Task";

const TasksContainer = ({ chosenCategory, tasksData, tasksChanged }) => {
  function mergeArrays(data) {
    let keys = Object.keys(data);
    let mergedArrays = [];
    keys.forEach((item) => {
      mergedArrays = [...mergedArrays, ...data[item]];
    });
    return mergedArrays;
  }
  return (
    <section className={style.section_container}>
      <h2>{chosenCategory}</h2>
      {mergeArrays(tasksData).length === 0 ? (
        <h3>No tasks added</h3>
      ) : chosenCategory === "All tasks" ? (
        mergeArrays(tasksData).map((item, index) => {
          return (
            <Task
              title={item.title}
              isDone={item.isDone}
              creared={item.creared}
              category={item.category}
              id={item.id}
              key={item.id}
              tasksChanged={tasksChanged}
            />
          );
        })
      ) : tasksData[chosenCategory].length === 0 ? (
        <h3>No tasks added</h3>
      ) : (
        tasksData[chosenCategory].map((item, index) => {
          return (
            <Task
              title={item.title}
              isDone={item.isDone}
              creared={item.creared}
              category={item.category}
              id={item.id}
              key={item.id}
              tasksChanged={tasksChanged}
            />
          );
        })
      )}
    </section>
  );
};

export default TasksContainer;
