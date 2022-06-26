const express = require('express');
const router = express.Router();
const app = require('../../app');


// https://progeeksservice.herokuapp.com/monday/webhook/changeStatus

router.post('/changeStatus',  (req, res) => {
    console.log(JSON.stringify(req.body, null, 2));

    const data = req.json()
    console.log('response data: ', JSON.stringify(data, null, 2))


    //Register monday webhook
    app.post("/", function(req, res) { console.log(JSON.stringify(req.body, 0, 2)); res.status(200).send(req.body);})
});


module.exports = router;

