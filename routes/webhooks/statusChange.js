const express = require('express');
const router = express.Router();
const app = require('../../app');
const fetch = require('../../utils/fetch');
const queryItems = require('../../querys/itemsAndColumnValues');
const getSubItems = require('../../utils/getSubitem');


// https://progeeksservice.herokuapp.com/monday/webhook/changeStatus

router.post('/changeStatus',  (req, res, next) => {
    const { boardId, groupId, pulseId: itemId } = req.body?.event;

    fetch(queryItems(boardId, groupId, itemId))
        .then(queryRes => {
            const itemData = queryRes.data.boards[0].groups[0].items[0]
            const itemName = itemData.name;
            let salesman = {};

            let saleAmount, dateOfSigning,
                leadDate, address,
                phone, email, leadComeFrom,
                leadNumber, courseItemId;

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
                       return courseItemId = JSON.parse(column.value).linkedPulseIds[0].linkedPulseId;
                }
            })
            console.log('///all///')
            console.log('all items values', JSON.stringify(itemData.column_values, null, 2))
            console.log('///all///')
            console.log('///end///')
            console.log("brook saleAmount:",saleAmount)
            console.log("brook dateOfSigning:",dateOfSigning)
            console.log("brook leadDate:",leadDate)
            console.log("brook address:",address)
            console.log("brook phone:",phone)
            console.log("brook email:",email)
            console.log("brook leadComeFrom:",leadComeFrom)
            console.log("brook leadNumber:",leadNumber)
            console.log("brook courseId:", courseItemId)
            console.log("brook itemName:",itemName)

            getSubItems(courseItemId, boardId )
                .then(getSubItemRes => {
                    console.log('brook getSubItemRes', getSubItemRes)
                })
        })
        .catch(queryError => console.log('queryError: ', queryError))
    res.post(res.status(200).send(req.body))
});




module.exports = router;

