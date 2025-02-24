const http = require('http');
const port = 3000; 
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html'); 

  switch (req.url) {
    case '/':
      res.write('<h1>Welcome to the Home Page!</h1>');
      break;

    case '/about':
      res.write('<h1>ℹ️ About Us</h1><p>This is the About page.</p>');
      break;

    case '/contact':
      res.write('<h1> Contact Us</h1><p>Email: contact@example.com</p>');
      break;

    default:
      res.statusCode = 404;
      res.write('<h1> 404 - Page Not Found</h1>');
  }

  res.end(); 
});
server.listen(port, () => {
  console.log(` Server is running at http://localhost:${port}`);
});
