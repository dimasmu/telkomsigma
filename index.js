const router = require('./src/route/index');
const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const hostname = process.env.HOSTNAME|| '127.0.0.1';
const port = process.env.PORT || 8086;

app.use(express.static(__dirname + '/views'));

app.set('view engine','ejs');

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port,hostname, () => console.log(`Server running at http://${hostname}:${port}`));

