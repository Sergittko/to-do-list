import style from "./Categories.module.scss";

const Categories = () => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - 70  / 100 * circumference;

  let circleStyle = {
    strokeDasharray: `${circumference} ${circumference}`,
    strokeDashoffset: offset,
  };
  // let setProgress = () => {};

  return (
    <section className={style.section_container}>
      <h2>Categories</h2>
      <nav>
        <div className={style.category_wrapper}>
          <span>Work</span>
          <div className={style.progress_wrapper}>
            <svg className={style.progress_ring} width="120" height="120">
              <circle
                className={style.progress_ring__circle}
                stroke="#31d255"
                strokeWidth="10"
                cx="60"
                cy="60"
                r="35"
                fill="transparent"
                style={circleStyle}
              />
            </svg>
          </div>
        </div>
        <div className={style.category_wrapper}>
          <span>All tasks</span>
          <div className={style.progress_wrapper}>
            <svg className={style.progress_ring} width="120" height="120">
              <circle
                className={style.progress_ring__circle}
                stroke="#31d255"
                strokeWidth="10"
                cx="60"
                cy="60"
                r="35"
                fill="transparent"
              />
            </svg>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Categories;
