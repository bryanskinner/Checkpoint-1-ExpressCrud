const userData = require('../data/index');
const sampleUser = require('../data/sampleUser');

// *Retrieve the entire array of users
const listUsers = (req, res) => {
  res.json(userData);
};

//* Retrieve a specific user by ID
const showUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = userData.find((user) => user.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

// *Add a new user to the array
const createUser = (req, res) => {
  const nextUserId = userData.length + 1;
  const newUser = { id: nextUserId, ...sampleUser };
  userData.push(newUser);
  res.status(201).json(newUser);
};

//* Update a user in the array based on ID
const updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = userData.findIndex((user) => user.id === userId);

  if (userIndex !== -1) {
    userData[userIndex] = { id: userId, ...sampleUser };
    res.json(userData[userIndex]);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

// *Delete a user from the array based on ID
const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = userData.findIndex((user) => user.id === userId);

  if (userIndex !== -1) {
    const deletedUser = userData.splice(userIndex, 1)[0];
    res.json(deletedUser);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

module.exports = {
  listUsers,
  showUser,
  createUser,
  updateUser,
  deleteUser
};
