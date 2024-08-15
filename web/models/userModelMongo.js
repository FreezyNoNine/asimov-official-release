const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = 3000;
const MONGO_URL = "mongodb+srv://admin:admin@clusterasimov.t2cpgyw.mongodb.net/asimov";

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("La base de données est connectée");
        app.listen(PORT, () => {
            console.log(`Le serveur tourne sur le port ${PORT}`);
        });
    })
    .catch((error) => console.log(error));