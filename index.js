const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const mongodb = require('./db/connect');
const bodyParser = require('body-parser');
const professionalRoutes = require('./routes/professional');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
app.use('/professional', professionalRoutes);

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.error(err);
    } else {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
});