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
            const itemData = data.data.boards[0].groups[0].items[0]
            console.log('brook item data:', itemData);

            const itemName = itemData.name;
            let salesman = {};

            let saleAmount, dateOfSigning,
                leadDate, address,
                phone, email, leadComeFrom,
                leadNumber, courseId;

            itemData.column_values.forEach(column => {
                switch (column.id) {
                    case 'person':
                        return salesman = column;
                    case 'numbers':
                        return saleAmount = column.text;
                    case '___________________8':
                        return dateOfSigning = column.text;
                    case 'date1':
                        return leadDate = column.text
                    case 'location6':
                        return address = column.text;
                    case 'text':
                        return phone = column.text;
                    case 'text6':
                        return email = column.text;
                    case 'text64':
                        return leadComeFrom = column.text;
                    case "text01":
                        return leadNumber = column.text;
                    case "connect_boards":
                       return courseId = JSON.parse(column.value).linkedPulseIds[0].linkedPulseId;
                }
            })

            console.log("brook saleAmount:",saleAmount)
            console.log("brook dateOfSigning:",dateOfSigning)
            console.log("brook leadDate:",leadDate)
            console.log("brook address:",address)
            console.log("brook phone:",phone)
            console.log("brook email:",email)
            console.log("brook leadComeFrom:",leadComeFrom)
            console.log("brook leadNumber:",leadNumber)
            console.log("brook courseId:",courseId)

        }).catch(queryError => console.log('queryError: ', queryError))

    res.post(res.status(200).send(req.body))
});




module.exports = router;

