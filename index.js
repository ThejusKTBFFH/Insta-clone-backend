const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');

const postRoutes = require('./routes/postRoutes');
 require("dotenv").config();

 require('dotenv').config({ path: './.env' });

const app = express();

app.use(bodyParser.json({limit:"30mb", extended : true}));

app.use(bodyParser.urlencoded({limit:"30mb", extended : true}));

app.use(cors());

app.use("/api/vi/posts", postRoutes);

const CONNECTION_URL = process.env.BASE_URL;


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{console.log("connected successfully")})
.catch((error)=>console.log(error.message));

