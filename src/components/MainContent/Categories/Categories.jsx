import style from "./Categories.module.scss";
import preset from "../../../assets/preset.png";

const Categories = () => {
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
        isDone: true,
        creared: "30.09.22",
      },
      {
        title: "123",
        isDone: false,
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
    allTasks.map((el) => {
      if (el.isDone) ++isDone;
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
        {keys.map((el, index) => {
          let { radius, circleStyle, percent } = countProgress(values[index]);
          return (
            <div className={style.category_wrapper} key={el}>
              <img src={preset} alt="" />
              <span>{el}</span>
              <div className={style.progress_wrapper}>
                <svg className={style.progress_ring} width="120" height="120">
                  <circle
                    className={style.progress_ring__circle}
                    stroke="#c6e5d7"
                    strokeWidth="10"
                    cx="60"
                    cy="60"
                    r={radius}
                    fill="transparent"
                  />
                  <circle
                    className={style.progress_ring__circle}
                    stroke="#31d255"
                    strokeWidth="10"
                    cx="60"
                    cy="60"
                    r={radius}
                    fill="transparent"
                    style={circleStyle}
                  />
                </svg>
                <span>{percent}%</span>
              </div>
            </div>
          );
        })}
        {[allValues].map(() => {
          let { radius, circleStyle, percent } = countProgress(allValues);
          return (
            <div className={style.category_wrapper} key={"all"}>
              <img src={preset} alt="" />
              <span>All tasks</span>
              <div className={style.progress_wrapper}>
                <svg className={style.progress_ring} width="120" height="120">
                  <circle
                    className={style.progress_ring__circle}
                    stroke="#c6e5d7"
                    strokeWidth="10"
                    cx="60"
                    cy="60"
                    r={radius}
                    fill="transparent"
                  />
                  <circle
                    className={style.progress_ring__circle}
                    stroke="#31d255"
                    strokeWidth="10"
                    cx="60"
                    cy="60"
                    r={radius}
                    fill="transparent"
                    style={circleStyle}
                  />
                </svg>
                <span>{percent}%</span>
              </div>
            </div>
          );
        })}
      </nav>
    </section>
  );
};

export default Categories;