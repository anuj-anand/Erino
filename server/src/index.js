const express = require("express");
const cors = require("cors");

const app = express();

const apiRouute = require("./routes/index");
const dbConnect = require("./config/db")

const start = ()=>{
    app.use(cors());
    app.use(express.json());
    app.use("/api", apiRouute);
    app.listen(8001, ()=>{
        console.log(`Server Running at 8001`);
        dbConnect();
    });
}

start();