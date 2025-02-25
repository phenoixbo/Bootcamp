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
    throw new Error('Unable to read data file');
  }
};


const writeUsers = (users) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
  } catch (error) {
    throw new Error('Unable to write to data file');
  }
};


app.get('/users', (req, res, next) => {
  try {
    const users = readUsers();
    res.json(users);
  } catch (error) {
    next(error); 
  }
});


app.get('/users/:id', (req, res, next) => {
  try {
    const users = readUsers();
    const user = users.find(u => u.id === parseInt(req.params.id));

    if (user) {
      res.json(user);
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    next(error); 
  }
});

app.post(
  '/users',
  [
    body('name').trim().notEmpty().withMessage('Name is required').isString().withMessage('Name must be a string'),
  ],
  (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); 
      }

      const users = readUsers();
      const newUser = {
        id: users.length + 1,
        name: req.body.name
      };

      users.push(newUser);
      writeUsers(users);

      res.json({ message: "User added", user: newUser });
    } catch (error) {
      next(error); 
    }
  }
);


app.delete('/users/:id', (req, res, next) => {
  try {
    let users = readUsers();
    const userId = parseInt(req.params.id);
    const filteredUsers = users.filter(u => u.id !== userId);

    if (users.length !== filteredUsers.length) {
      writeUsers(filteredUsers);
      res.json({ message: "User deleted" });
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    next(error); 
  }
});


app.use((err, req, res, next) => {
  console.error(err); 


  res.status(500).json({
    error: {
      message: err.message || 'Internal Server Error',
      code: 'INTERNAL_SERVER_ERROR',
    },
  });
});
 
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
