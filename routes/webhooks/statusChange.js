const express = require('express');
const router = express.Router();
const app = require('../../app');
const fetch = require('../../utils/fetch');
const queryItems = require('../../querys/itemsAndColumnValues');
const getSubItems = require('../../utils/getSubitem');
const createSubItem = (require('../../querys/createSubitem'))



// https://progeeksservice.herokuapp.com/monday/webhook/changeStatus

router.post('/changeStatus',  (req, res, next) => {
    const { boardId, groupId, pulseId: itemId } = req.body?.event;
    console.log('brook test main query boardId:', boardId)
    console.log('brook test main query itemId:', itemId)
    fetch(queryItems(boardId, groupId, itemId))
        .then(async queryRes => {
            const itemData = queryRes.data.boards[0].groups[0].items[0]
            const itemName = itemData.name;


            const objectValues = {
                owner: '',
                date: '',
                lead: '',
                leadId: '',
                saleAmount: '',
                leadComeFrom: '',
                address: '',
                phone: '',
                email: ''
            }

            let courseItemId;

            itemData.column_values.forEach(column => {
                switch (column.id) {
                    case 'person':
                        return objectValues.owner = column.text;
                    case 'numbers':
                        return objectValues.saleAmount = column.text;
                    case 'date':
                        return objectValues.date = column.text;
                    case 'text4':
                        return objectValues.address = column.text;
                    case 'text_17':
                        return objectValues.phone = column.text;
                    case 'text_14':
                        return objectValues.leadId = column.text;
                    case "text_196":
                        return objectValues.lead = column.text;
                    case "connect_boards":
                       return courseItemId = JSON.parse(column.value).linkedPulseIds[0].linkedPulseId;
                }
            })

            const coursesDevBoardId = 2845119150;
            const coursesProdBoardId = 2716641395;

            console.log('///all///')
            console.log('all items values', JSON.stringify(itemData.column_values, null, 2))
            console.log('///all///')
            console.log('///end///')

            console.log("brook courseId:", courseItemId)
            console.log("brook itemName:",itemName)


         const subItemKeysObj = await getSubItems(courseItemId, coursesDevBoardId )
            console.log('brook sub item keys 555', subItemKeysObj)


         await fetch(createSubItem(itemName, courseItemId, objectValues))
                .then(createItemRes => console.log('create item res:', createItemRes))
        })
        .catch(queryError => console.log('queryError: ', queryError))

    res.post(res.status(200).send(req.body))
});




module.exports = router;

