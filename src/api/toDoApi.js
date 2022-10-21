export const getTasks = () => {
  return JSON.parse(localStorage.getItem("tasks"));
};

export const getName = () => {
  return JSON.parse(localStorage.getItem("userName"));
};

export const getUserImage = () => {
  return JSON.parse(localStorage.getItem("userImage"));
};

export const getUserName = () => {
  let name = JSON.parse(localStorage.getItem("userName"));
  if (!name) {
    localStorage.setItem("userName", JSON.stringify(null));
    localStorage.setItem("userImage", JSON.stringify(null));
    localStorage.setItem(
      "tasks",
      JSON.stringify({
        "No section": [],
      })
    );
  }
  return JSON.parse(localStorage.getItem("userName"));
};

export const setName = (name) =>
  localStorage.setItem("userName", JSON.stringify(name));

export const setUserImage = (img) =>
  localStorage.setItem("userImage", JSON.stringify(img));

export const setNewTask = (title, category) => {
  const today = new Date();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();
  const yy = today.getFullYear().toString().slice(-2);
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  const date = dd + "." + mm + "." + yy;

  let taskState = getTasks();
  let newTask = {
    title: title,
    isDone: false,
    creared: date,
    category: category,
  };
  let newState = {
    ...taskState,
    [category]: [newTask, ...taskState[category]],
  };
  localStorage.setItem("tasks", JSON.stringify(newState));
};

export const setNewCategory = (categoryName) => {
  let taskState = getTasks();
  let newState = {
    ...taskState,
    [categoryName]: [],
  };
  localStorage.setItem("tasks", JSON.stringify(newState));
};
