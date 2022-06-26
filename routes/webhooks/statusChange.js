const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/monday/webhook/install"', async (req, res, next) => {
    res.render('index', { title: 'Express' });

    // res.send('respond with a resource');
    const request = await req;
    console.log('request from client:', request)
});

module.exports = router;
