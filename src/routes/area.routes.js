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

const { getAreas, getArea, postArea, putArea, deleteArea } = require('../models/area');

router.get('/area/get-areas', async (req, res) => {
    getAreas(conection, (result) => {
        res.json(result);
    });
});

router.get('/area/:id', async (req, res) => {
    getArea(conection, req.params.id ,(result) => {
        res.json(result);
    });
});

router.post('/area/save', async (req, res) => {
    postArea(conection, req.body ,(result) => {
        res.json(result);
    });
});

router.put('/area/update/:id', async (req, res) => {
    putArea(conection, req.body, req.params.id, (result) => {
        res.json(result);
    });
});

router.delete('/area/delete/:id', async (req, res) => {
    deleteArea(conection, req.params.id ,(result) => {
        res.json(result);
    });
});

module.exports = router ;