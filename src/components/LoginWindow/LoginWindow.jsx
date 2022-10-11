import style from "./LoginWindow.module.scss";
import { useState } from "react";
import { setName as setLocalName, getUserName } from "../../api/toDoApi";

const LoginWindow = (props) => {
  let [name, setName] = useState("");

  let handleSubmit = (event) => {
    let name = event.target[0].value;
    if (name.length > 1) {
      setLocalName(name.charAt(0).toUpperCase() + name.slice(1));
      props.nameChanged(getUserName());
      setName("");
    }
    event.preventDefault();
  };

  return (
    <div className={style.login_container}>
      <h1>Enter your name</h1>
      <form className={style.input_container} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type task"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginWindow;
