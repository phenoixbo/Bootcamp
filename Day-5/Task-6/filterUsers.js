const users = [
    { name: "Sudha", age: 30 },
    { name: "Ganesan", age: 22 },
    { name: "Pradeep", age: 27 },
    { name: "Rooban", age: 27 },
    { name: "Dinesh", age: 29 },
  ];
  const filteredUsers = users.filter(user => user.age > 25);
  console.log("Users older than 25:");
  console.log(filteredUsers);
  