const REGISTERED_USERS_KEY = "registered_users";
const ACTIVE_USER = "active_user";

const addUser = (user) => {
  const usersStr = localStorage.getItem(REGISTERED_USERS_KEY) || "[]";
  const users = JSON.parse(usersStr);

  users.push(user);

  localStorage.setItem(
    REGISTERED_USERS_KEY,
    JSON.stringify(users)
  );
};

const isUsernameExists = (username) => {
  const usersStr = localStorage.getItem(REGISTERED_USERS_KEY) || "[]";
  const users = JSON.parse(usersStr);

  const user = users.find((x) => x.username === username);

  return user != null;
};

const getUser = (username, password) => {
  const usersStr = localStorage.getItem(REGISTERED_USERS_KEY) || "[]";
  const users = JSON.parse(usersStr);

  return users.find(
    (x) =>
      x.username === username &&
      x.password === password
  );
};

const updateActiveUser = (user) => {
  localStorage.setItem(
    ACTIVE_USER,
    JSON.stringify(user)
  );
};

const getActiveUser = () => {
  const usersStr = localStorage.getItem(ACTIVE_USER) || null;

  if (usersStr == null) {
    return null;
  }

  const user = JSON.parse(usersStr);

  return user;
};

const removeActiveUser = () => {
  localStorage.removeItem(ACTIVE_USER);
};

export {
  REGISTERED_USERS_KEY,
  addUser,
  getUser,
  isUsernameExists,
  updateActiveUser,
  getActiveUser,
  removeActiveUser,
};