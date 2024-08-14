import uniqid from "uniqid";

let user = [];

export const createUser = (req, res) => {
  const newUser = req.body;
  const userWithId = { ...newUser, id: uniqid() };
  user.push(userWithId);

  res.send(user);
};

export const getUser = (req, res) => {
  res.send(user);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  const userToUpdate = user.find((ele) => ele.id === id);

  if (name) {
    userToUpdate.name = name;
  }

  if (email) {
    userToUpdate.email = email;
  }

  if (password) {
    userToUpdate.password = password;
  }

  res.send("user created successfully");
};

export const deleteUser = (req, res) => {
  const id = req.params.id;
  user = user.filter((item) => item.id != id);
  res.send(`user with id:${id} deleted successfully`);
};
