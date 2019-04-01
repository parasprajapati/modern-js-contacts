// /contacts/
const routes = require('express').Router();
const db = require('../db');

routes.get("/", (req, res) => {
    db.query('SELECT * FROM contacts', (error, result) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send(result.rows);
        }
    })
});

routes.post("/", (req, res) => {

});

routes.get("/:id", (req, res) => {

});

routes.put("/:id", (req, res) => {

});

routes.delete("/:id", (req, res) => {

});

module.exports = routes;