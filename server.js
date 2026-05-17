// DEPENDENCIES
const express = require("express");
const app = express();
require("dotenv").config();
const { MongoClient } = require("mongodb");

// Local Environmental Variables
const PORT = process.env.PORT || 1738;
const uri = process.env.MONGO_URI;

// MIDDLEWARE
const client = new MongoClient(uri)

// // ROUTES
// Create a single GET route at / that, upon a successful database connection, sends back a JSON response: { message: "Successfully connected to the database!" }. If the connection fails, it should send a 500 status code with a message: { message: "Failed to connect to the database." }.

app.get("/", (req, res)=>{
    res.send("Server's up and running...")
});

async function mongoDbConnection() {

    try{
        await client.connect();
        console.log ("Database Connection Has Been Made!")

        const db = client.db("test");
        console.log(`Connected to the ${db.databaseName} database`)
    }catch(error){
        console.error('MongoDB connection error: ', error)
    }

}
mongoDbConnection();

// PORT
app.listen(PORT, ()=>{
    console.log(`Server running on: http://localhost:${PORT}`)
})