require('dotenv').config()
require('./config/mongoose-connection');
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const studentRoute = require('./routes/studentRoute');

console.log(`Environment: ${process.env.NODE_ENV}`);
 
//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({origin: process.env.FRONTEND_URL ,credentials: true}));
app.use(bodyParser.json());


//Routes
app.use('/students',studentRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
