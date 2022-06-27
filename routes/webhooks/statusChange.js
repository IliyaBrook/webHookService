const express = require('express');
const router = express.Router();
const app = require('../../app');
const fetch = require('../../utils/fetch');
const queryItems = require('../../querys/itemsAndColumnValues');
const getSubItems = require('../../utils/getSubitem');



// https://progeeksservice.herokuapp.com/monday/webhook/changeStatus

router.post('/changeStatus',  (req, res, next) => {
    const { boardId, groupId, pulseId: itemId } = req.body?.event;
    console.log('brook test main query boardId:', boardId)
    console.log('brook test main query itemId:', itemId)
    fetch(queryItems(boardId, groupId, itemId))
        .then(async queryRes => {
            const itemData = queryRes.data.boards[0].groups[0].items[0]
            const itemName = itemData.name;
            let salesman = {};

            let saleAmount, dateOfSigning,
                date, address,
                phone, email, leadComeFrom,
                leadId, courseItem, owner;

            itemData.column_values.forEach(column => {
                switch (column.id) {
                    case 'person':
                        return salesman = column;
                    case 'numbers':
                        return saleAmount = column.text;
                    case '___________________8':
                        return dateOfSigning = column.text;
                    case 'date1':
                        return date = column.text
                    case 'location6':
                        return address = column.text;
                    case 'text':
                        return phone = column.text;
                    case 'text6':
                        return email = column.text;
                    case 'text64':
                        return leadComeFrom = column.text;
                    case "text01":
                        return leadId = column.text;
                    case "owner9":
                        return owner = column.text;
                    case "connect_boards":
                       return courseItem = JSON.parse(column.value).linkedPulseIds[0].linkedPulseId;
                }
            })

            const coursesDevBoardId = 2845119150;
            const coursesProdBoardId = 2716641395;

            console.log('///all///')
            console.log('all items values', JSON.stringify(itemData.column_values, null, 2))
            console.log('///all///')
            console.log('///end///')
            console.log("brook saleAmount:",saleAmount)
            console.log("brook dateOfSigning:",dateOfSigning)
            console.log("brook leadDate:",date)
            console.log("brook address:",address)
            console.log("brook phone:",phone)
            console.log("brook email:",email)
            console.log("brook leadComeFrom:",leadComeFrom)
            console.log("brook leadId:",leadId)
            console.log("brook courseId:", courseItem)
            console.log("brook itemName:",itemName)
            console.log("brook owner:", owner)



         const subItemKeysObj = await getSubItems(courseItemId, coursesDevBoardId )
            console.log('brook sub item keys 555', subItemKeysObj)

            const objectValues = { owner, date, leadId, saleAmount, leadComeFrom, address, phone }
            const values = Object.values(objectValues)
            const keys = Object.values(subItemKeysObj)
            const objNewSubItem = {}
            keys.forEach((key, idx) => {
                return objNewSubItem[key] = values[idx]
            })
            console.log('object new sub Item:', objNewSubItem )
        })
        .catch(queryError => console.log('queryError: ', queryError))
    res.post(res.status(200).send(req.body))
});




module.exports = router;

