const express = require('express');
const router = express.Router();
const app = require('../../app');

/* GET home page. */
router.post('/changeStatus', function (req, res) {
    console.log(JSON.stringify(req.body, null, 2));
    res.status(200).send(req.body);

    app.post("/", function(req, res) { console.log(JSON.stringify(req.body, 0, 2)); res.status(200).send(req.body);})
});


module.exports = router;

