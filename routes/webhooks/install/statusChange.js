const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
    // res.render('index', { title: 'Express' });

    // res.send('respond with a resource');
    const request = await req;
    console.log('request from client:', JSON.stringify(request.body, null, 2))
    return res.status(200).send(req.body);
});

module.exports = router;
