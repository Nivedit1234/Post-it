const app = require('./app');
const http = require('http');
//const { PORT } = require('./utils/config');
const connectToDB = require('./db');

connectToDB();
const dotenv = require('dotenv');
const PORT = process.env.PORT;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
