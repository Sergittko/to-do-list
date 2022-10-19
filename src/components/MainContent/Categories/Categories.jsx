import style from "./Categories.module.scss";
import AddCategoryCard from "./AddCategoryCard/AddCategoryCard";
import Card from "./Card/Card";
import { useState } from "react";

const Categories = (props) => {
  let [categoryMode, setCategoryMode] = useState(false);

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

  let countProgress = (allTasks) => {
    let isDone = 0;
    allTasks.forEach((item, i) => {
      if (item.isDone) ++isDone;
    });

    let percent = Math.floor((isDone * 100) / allTasks.length);
    const radius = 35;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;
    let circleStyle = {
      strokeDasharray: `${circumference} ${circumference}`,
      strokeDashoffset: offset,
    };

    return { radius, circleStyle, percent };
  };

  const keys = Object.keys(tasksData);
  const values = Object.values(tasksData);
  let allValues = values.reduce((acc, val) => acc.concat(val), []);

  return (
    <section className={style.section_container}>
      <h2>Categories</h2>
      <nav>
        {[allValues].map(() => {
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
        })}

        {keys.map((el, index) => {
          let { radius, circleStyle, percent } = countProgress(values[index]);
          return (
            <Card
              key={el}
              name={el}
              radius={radius}
              circleStyle={circleStyle}
              percent={percent}
              changeCategory={() => props.changeCategory(el)}
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
        <AddCategoryCard setCategoryMode={setCategoryMode} />
      ) : null}
    </section>
  );
};

export default Categories;
