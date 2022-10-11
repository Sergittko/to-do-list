const stateData = {
  userInfo: {
    name: null,
    img: null,
  },
  tasks: {},
};
export const getState = () => {
  let state = JSON.parse(localStorage.getItem("state"));
  if (!state) localStorage.setItem("state", JSON.stringify(stateData));
  return JSON.parse(localStorage.getItem("state"));
};

export const getUserName = () => {
  let name = JSON.parse(localStorage.getItem("userName"));
  if (!name) localStorage.setItem("userName", JSON.stringify(null));
  return JSON.parse(localStorage.getItem("userName"));
};

export const setName = (name) =>
  localStorage.setItem("userName", JSON.stringify(name));
