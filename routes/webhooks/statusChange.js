const express = require('express');
const router = express.Router();
const app = require('../../app');
const fetch = require('../../utils/fetch');
const queryItems = require('../../querys/itemsAndColumnValues');


// https://progeeksservice.herokuapp.com/monday/webhook/changeStatus

router.post('/changeStatus',  (req, res, next) => {
    const { boardId, groupId, pulseId: itemId } = req.body?.event;


    console.log('brook board: ', boardId)
    console.log('brook groupId: ', groupId)
    console.log('brook itemId: ', itemId)

    fetch(queryItems(boardId, groupId, itemId))
        .then(async queryRes => {
            const data = await queryRes.json();
            console.log('query response:', JSON.stringify(data, null, 2))
        }).catch(queryError => console.log('queryError: ', queryError))

    //Register monday webhook
    // app.post("/", function(req, res) { console.log(JSON.stringify(req.body, 0, 2)); res.status(200).send(req.body);})
});




module.exports = router;

