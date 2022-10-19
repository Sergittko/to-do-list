import style from "./AddCategoryCard.module.scss";
import { useState } from "react";
import { setNewCategory } from "../../../../api/toDoApi";


const AddCategoryCard = (props) => {
  let [name, setName] = useState("");

  let handleSubmit = (event) => {
    let name = event.target[0].value;
    if (name.length > 1) {
      setNewCategory(name.charAt(0).toUpperCase() + name.slice(1));
      props.setCategoryMode(false);
      setName("");
    }
    if (name.length === 0) {
      props.setCategoryMode(false);
    }
    event.preventDefault();
  };

  return (
    <div
      className={style.alert_container}
      id="outer"
      onClick={(e) => {
        if (e.target.id === "outer") props.setCategoryMode(false);
      }}
    >
      <div className={style.alert_block}>
        <h1>Enter category name</h1>
        <form className={style.input_container} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type category"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default AddCategoryCard;