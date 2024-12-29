const http = require("http");
const app = require("./index"); // Importing the Express app

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server