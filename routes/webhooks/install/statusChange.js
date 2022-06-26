const express = require('express');
const router = express.Router();
const app = require('../../index');

/* GET home page. */
router.post('/', async (req, res, next) => {
    // res.render('index', { title: 'Express' });

    // res.send('respond with a resource');
    const request = await req;
    console.log('request from client:', JSON.stringify(request.body, null, 2))
    return res.status(200).send(request.body);
    //app.post("/", function(req, res) { console.log(JSON.stringify(req.body, 0, 2)); res.status(200).send(req.body);})
});

module.exports = router;
