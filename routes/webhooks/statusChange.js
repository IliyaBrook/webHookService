const express = require('express');
const router = express.Router();
const app = require('../../app');
const fetch = require('../../utils/fetch');
const queryItems = require('../../querys/itemsAndColumnValues');
const createSubItem = (require('../../querys/createSubitem'))
const deleteItem = (require('../../querys/itemDelete'))



// https://progeeksservice.herokuapp.com/monday/webhook/changeStatus

router.post('/changeStatus',  async (req, res, next) => {
    let errors = null;
    let itemIdToRem;
    try {
        const { boardId, groupId, pulseId: itemId } = req.body?.event;
        itemIdToRem = itemId;
        await fetch(queryItems(boardId, groupId, itemId))
            .then(async queryRes => {
                const itemData = queryRes.data.boards?.[0].groups?.[0].items?.[0];
                const itemName = itemData.name;


                const objectValues = {
                    owner: '',
                    date: '',
                    leadId: '',
                    saleAmount: '',
                    leadComeFrom: '',
                    address: '',
                    phone: '',
                    email: '',
                    salesMan:''
                }

                let courseItemId;

                itemData.column_values.forEach(column => {
                    console.log('brook column :', column)
                    switch (column.id) {
                        case 'owner9':
                            return objectValues.owner = column.text;
                        case 'numbers':
                            return objectValues.saleAmount = column.text;
                        case '___________________8':
                            return objectValues.date = column.text;
                        case 'location6':
                            return objectValues.address = column.text;
                        case 'text':
                            return objectValues.phone = column.text;
                        case "text6":
                            return objectValues.email = column.text;
                        case "text64":
                            return objectValues.leadComeFrom = column.text;
                        case "text01":
                            return objectValues.leadId = column.text;
                        case "text3":
                            return objectValues.salesMan = column.text;
                        case "connect_boards":
                            console.log('brook courseItemId:', column.value)
                            return courseItemId = JSON.parse(column.value).linkedPulseIds?.[0].linkedPulseId;
                    }
                })

                await fetch(createSubItem(itemName, courseItemId, objectValues))
                    .then(createItemRes => {
                        if (Object.keys(createItemRes)?.includes('errors')){
                            console.log('create item error', createItemRes.errors)
                            errors = createItemRes.errors;
                        }
                        console.log('create item res:', createItemRes)
                    })
            })
    }catch (error) {
        console.log(error)
        if (error) {
            errors = error
        }
    }
    if (!errors) {
        fetch(deleteItem(itemIdToRem))
            .then(res => console.log('delete item response:', res))
    }
    return res.status(200).send(req.body);
});

//respond to monday api

module.exports = router;

