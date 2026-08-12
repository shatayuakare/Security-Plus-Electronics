import express from "express";
// import dns from "dns"
// import mongoose from "mongoose";
// import dotenv from "dotenv"
import cors from "cors"
import productRoute from "./routes/products.route.js";
const server = express();

// dotenv.config();
// dns.setServers(["8.8.8.8", "1.1.1.1"]);

server.use(cors())



server.listen(3000, () => {
    console.log("Backend Server connected")

    // mongoose
    //     .connect(process.env.MONGODB)
    //     .then(() => {
    //         console.log(`Database Connected Successfully`);
    //     })
    //     .catch((error) => {
    //         console.error("MongoDB Connection Error:", error.message);
    //         console.log(
    //             "Please ensure MongoDB is running or check your connection string"
    //         );
    //     });

})


server.use("/products", productRoute)