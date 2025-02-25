const express = require('express');
const app = express();

const users = [
  { id: 1, name: "Pradeep" },
  { id: 2, name: "Rohith" }
];

app.get('/users', (req, res) => {
  res.json(users);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
