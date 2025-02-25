const express = require('express');
const body= require('./body.json')
const app = express();
app.use(express.json());


const users = [
  { id: 1, name: "Pradeep" },
  { id: 2, name: "Rohith" }
];
app.get('/users', (req, res) => {
  res.json(users);
});
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };

  users.push(newUser); 
  res.json({ message: "User added", user: newUser });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
