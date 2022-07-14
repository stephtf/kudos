const express = require('express');
const path = require('path');
const cors = require('cors');
const routes = require('./routes');

const db = require('./config/connection');

const PORT = process.env.PORT || 3001; 
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


app.use(express.static(path.join(__dirname, '../client/dist/client')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/client/index.html'));
});


db.once('open', () => {
app.listen(PORT, () => {
    console.log(`Relax, it's all good over on port ${PORT}!`);
});
});