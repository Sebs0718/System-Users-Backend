const express = require("express");
const router = express.Router();

const mysql = require('mysql');

const conection = mysql.createConnection({
    host: 'localhost',
    database: 'sitemausuarios',
    user: 'root',
    password: ''
});

conection.connect((error) => {
    if(error) {
        throw error;
    } else {
        console.log('Successful Connection');
    }
});

const { getAreas } = require('../models/area');

router.get('/area/get-areas', async (req, res) => {
    getAreas(conection, (result) => {
        res.json(result);
    });
});


module.exports = router ;