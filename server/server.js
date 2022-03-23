const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://anderson_angelo:Thor1994@w-c-server.xkqbm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}, (err) => {
  if(err) {
    console.log(err)
  }else {
    console.log('MongoBD successfully connected')
  }
})

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(routes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
