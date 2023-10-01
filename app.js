const express= require('express');
const router = require('./src/routes/api');

const app= express();

//app.js handles middles ware for security
//middleware works before route config
//security middleware import
const rateLimit=require('express-rate-limit');
const helmet=require('helmet')
const mongoSanitize=require('express-mongo-sanitize')
const xss=require('xss-clean')
const hpp=require('hpp')

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSanitizer = require('express-mongo-sanitize');
const dotenv = require('dotenv');

//security middleware implement
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressSanitizer());



app.use(helmet())
app.use(hpp())
app.use(mongoSanitize())
app.use(xss())
dotenv.config()




// MongoDB Connection for atlas : mongodb+srv://afrin:afrin321@cluster0.uxmogow.mongodb.net/

const { MongoClient } = require('mongodb');

// Replace the connection string with your actual MongoDB Atlas connection string
const uri = 'mongodb+srv://afrin:afrin321@cluster0.uxmogow.mongodb.net/';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  } finally {
    // Ensure the client is closed when you finish using it
    // await client.close();
  }
}

connect();





//request rate limiting
const limiter = rateLimit({
    windowMs : 10 * 60 * 1000, // 10 minutes
    max: 100 // limit each IP to 100 requests per windowMs
})
app.use(limiter)


app.use("/api",router)

//baseurl/api/create
//app.js handles undefined route handle 
app.use("*", (req, res) => {
    res.status(404).json({
        status: "fail",
        message: "Not found"
    })
})




module.exports = app;