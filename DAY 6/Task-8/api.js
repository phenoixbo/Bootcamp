const express = require('express');
const fs = require('fs');
const { body, validationResult } = require('express-validator');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const DATA_FILE = './body.json';


app.use(express.json());


const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Users API",
      version: "1.0.0",
      description: "API for managing users with CRUD operations",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server"
      }
    ]
  },
  apis: ["./server.js"], 
};


const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.get('/users', (req, res) => {
  try {
    const users = JSON.parse(fs.readFileSync(DATA_FILE));
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get('/users/:id', (req, res) => {
  try {
    const users = JSON.parse(fs.readFileSync(DATA_FILE));
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


 
app.post('/users', [
  body('name').trim().notEmpty().withMessage('Name is required').isString().withMessage('Name must be a string'),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const users = JSON.parse(fs.readFileSync(DATA_FILE));
    const newUser = { id: users.length + 1, name: req.body.name };
    users.push(newUser);
    fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));

    res.status(201).json({ message: "User added", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete('/users/:id', (req, res) => {
  try {
    let users = JSON.parse(fs.readFileSync(DATA_FILE));
    const userId = parseInt(req.params.id);
    const updatedUsers = users.filter(user => user.id !== userId);

    if (users.length === updatedUsers.length) {
      return res.status(404).json({ error: "User not found" });
    }

    fs.writeFileSync(DATA_FILE, JSON.stringify(updatedUsers, null, 2));
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`API docs available at http://localhost:${PORT}/api-docs`);
});
