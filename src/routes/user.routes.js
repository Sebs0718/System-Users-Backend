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

const { getAll, getState, postUser, getUser, putUser, deleteUser } = require('../models/user');

router.get('/users/get-all', async (req, res) => {
    getAll(conection, (result) => {
        res.json(result);
    });
});

router.get('/user/:id', async (req, res) => {
    getUser(conection, req.params.id ,(result) => {
        res.json(result);
    });
});

router.get('/users/get-state', async (req, res) => {
    getState(conection, (result) => {
        res.json(result);
    });
});

router.post('/users/save', async (req, res) => {
    postUser(conection, req.body ,(result) => {
        res.json(result);
    });
});

router.put('/users/update/:id', async (req, res) => {
    putUser(conection, req.body, req.params.id, (result) => {
        res.json(result);
    });
});

router.delete('/user/:id', async (req, res) => {
    deleteUser(conection, req.params.id ,(result) => {
        res.json(result);
    });
});

module.exports = router ;