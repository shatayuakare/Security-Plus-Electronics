import express from "express";
import mongoose from "mongoose";

const server = express();

// server.use()

server.get("/", (req, res) => {
    try {
        console.log("Server start Successfully")
        res.send("Hello world");
        mongoose.connect('mongodb+srv://Security-Plus:x15qp9VEpM3BZW4J@cluster0.k18l20d.mongodb.net/')
            .then(() => console.log('Connected!'));

    } catch (error) {
        console.log(error)
        // req.response.message(error.message)
    }

})

server.listen(3000) 