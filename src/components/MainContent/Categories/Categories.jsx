import style from "./Categories.module.scss";
import AddCategoryCard from "./AddCategoryCard/AddCategoryCard";
import Card from "./Card/Card";
import { useState, useEffect } from "react";

const Categories = (props) => {
  let [categoryMode, setCategoryMode] = useState(false);

  useEffect(() => {
    if (categoryMode) document.body.style.overflow = "hidden";
    if (!categoryMode) document.body.style.overflow = "unset";
  }, [categoryMode]);

  let countProgress = (allTasks) => {
    let isDone = 0;
    allTasks.forEach((item, i) => {
      if (item.isDone) ++isDone;
    });
    let percent =
      allTasks.length === 0
        ? "0"
        : Math.floor((isDone * 100) / allTasks.length);
    const radius = 35;
    const circumference = 2 * Math.PI * radius;

    const offset = circumference - (percent / 100) * circumference;
    let circleStyle = {
      strokeDasharray: `${circumference} ${circumference}`,
      strokeDashoffset: offset,
    };

    return { radius, circleStyle, percent };
  };

  const keys = Object.keys(props.tasksData);
  const values = Object.values(props.tasksData);
  let allValues = values.reduce((acc, val) => acc.concat(val), []);
  return (
    <section className={style.section_container}>
      <h2>Categories</h2>
      <nav>
        {keys.length > 1
          ? [allValues].map(() => {
              let { radius, circleStyle, percent } = countProgress(allValues);
              return (
                <Card
                  key="all"
                  name="All tasks"
                  radius={radius}
                  circleStyle={circleStyle}
                  percent={percent}
                  changeCategory={() => props.changeCategory("All tasks")}
                />
              );
            })
          : null}

        {keys.map((el, index) => {
          let { radius, circleStyle, percent } = countProgress(values[index]);
          return (
            <Card
              key={el}
              name={el}
              radius={radius}
              circleStyle={circleStyle}
              percent={percent}
              changeCategory={props.changeCategory}
              tasksChanged={props.tasksChanged}
            />
          );
        })}

        <div
          className={style.add_cathegory_container}
          onClick={() => setCategoryMode(!categoryMode)}
        >
          <p>Add new category</p>
        </div>
      </nav>
      {categoryMode ? (
        <AddCategoryCard
          setCategoryMode={setCategoryMode}
          tasksChanged={props.tasksChanged}
        />
      ) : null}
    </section>
  );
};

export default Categories;
