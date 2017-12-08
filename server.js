const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const cors = require('cors');
const md5 = require('MD5');
const websocket = require('./api/websocket.js');
//const freeswitch = require('./api/freeswitch.js');
const sql = require('./api/database.js');
const config = require('./config/general.js');

const app = express();
app.use(cors());

const server = http.createServer(app);
const port = config.PORT;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})

sql.Connect(()=>{});
websocket.CreateServer(server);
server.listen(port, () => console.log('Example app listening on port' + port))
