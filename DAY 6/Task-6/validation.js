const express = require('express');
const fs = require('fs');
const { body, validationResult } = require('express-validator'); 
const app = express();
const DATA_FILE = './body.json'; 
app.use(express.json());
const readUsers = () => {
  try {
    const data = fs.readFileSync(DATA_FILE);
    return JSON.parse(data);
  } catch (error) {
    return []; 
  }
};
const writeUsers = (users) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
};

app.get('/users', (req, res) => {
  const users = readUsers();
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id === parseInt(req.params.id));

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});


app.post(
  '/users',
  [
    body('name').trim().notEmpty().withMessage('Name is required').isString().withMessage('Name must be a string'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // Return validation errors
    }

    const users = readUsers();
    const newUser = {
      id: users.length + 1,
      name: req.body.name
    };

    users.push(newUser);
    writeUsers(users);

    res.json({ message: "User added", user: newUser });
  }
);


app.delete('/users/:id', (req, res) => {
  let users = readUsers();
  const userId = parseInt(req.params.id);
  const filteredUsers = users.filter(u => u.id !== userId);

  if (users.length !== filteredUsers.length) {
    writeUsers(filteredUsers);
    res.json({ message: "User deleted" });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
