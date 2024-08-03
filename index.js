import dot from "dotenv";
import express from "express";
import connectDB from "./config/dbconnect.js";
import user from './routes/user.route.js';
dot.config();

const app = express();

// user rout

app.use('/', user);

// start server promises
connectDB()
    .then(() => {
        console.log(`Conncted`);
    })
    .catch(() => {
        console.log(console.log("problem to connect db server not start"));
    });

export { app };
