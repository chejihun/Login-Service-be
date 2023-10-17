const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index')
require('dotenv').config();
const { MONGODB_URI } = process.env;
const cors = require('cors')


const app = express();
app.use(bodyParser.json());
app.use('/api', indexRouter);
app.use(cors());

mongoose.connect(MONGODB_URI , { useNewUrlParser: true }).then(()=> {
    console.log("mongoose connected");
}).catch((err) => {console.log("DB connection fail", err);
})

app.listen(5000, () => {
    console.log("sever on 5000");
})

