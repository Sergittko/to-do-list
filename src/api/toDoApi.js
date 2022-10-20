const stateData = {
  userInfo: {
    name: null,
    img: null,
  },
  tasks: {},
};

const tasksData = {
  Work: [
    {
      title: "Make todo",
      isDone: true,
      creared: "30.09.22",
      category: "Work",
    },
    {
      title: "1",
      isDone: false,
      creared: "1.10.22",
      category: "Work",
    },
    {
      title: "1sdfsdf2",
      isDone: true,
      creared: "30.09.22",
      category: "Work",
    },
    {
      title: "12psodkf3",
      isDone: true,
      creared: "02.10.22",
      category: "Work",
    },
    {
      title: "12sdiu iuh iuh34",
      isDone: true,
      creared: "04.10.22",
      category: "Work",
    },
  ],
  NoSection: [
    {
      title: "12",
      isDone: false,
      creared: "today",
      category: "No section",
    },
    {
      title: "123",
      isDone: true,
      creared: "yesterday",
      category: "No section",
    },
    {
      title: "1234",
      isDone: true,
      creared: "30.09.22",
      category: "No section",
    },
  ],
};
// let tasks = JSON.parse(localStorage.getItem("tasks"));
// if (!tasks) localStorage.setItem("tasks", JSON.stringify(stateData));

export const getTasks = () => {
  return JSON.parse(localStorage.getItem("tasks"));
};

export const getUserName = () => {
  let name = JSON.parse(localStorage.getItem("userName"));
  if (!name) {
    localStorage.setItem("userName", JSON.stringify(null));
    localStorage.setItem("tasks", JSON.stringify({ 'No section': [] }));
  }
  return JSON.parse(localStorage.getItem("userName"));
};

export const setName = (name) =>
  localStorage.setItem("userName", JSON.stringify(name));

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
