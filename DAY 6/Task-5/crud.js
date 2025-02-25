const express = require('express');
const fs = require('fs');

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
app.post('/users', (req, res) => {
  const users = readUsers();
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };

  users.push(newUser);
  writeUsers(users);

  res.json({ message: "User added", user: newUser });
});

app.delete("/api/product/:id", async (req, res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findIdAndDelete(id);

        if(!product){
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json({ meaasage: "Product deleted successfully"});
    } catch (error){
        res.status(500).json({ message: error.message}); 
    }
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
