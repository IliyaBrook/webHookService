const useFetch = require('./fetch');
const queryColumnValues = require('../querys/getItemColumnValues');
const getSubItem = require('../querys/getSubItem');

module.exports = async (itemId, boardId) => {
    const data = await useFetch(getSubItem(boardId, itemId))
    const subItemKeys = {
        owner:'',
        date:'',
        lead:'',
        leadId:'',
        saleAmount:'',
        leadComeFrom:'',
        address:'',
        phone:'',
        email:''
    }
    const subItemColumnValues =  data.data.boards[0].items[0].subitems[0].column_values;

    subItemColumnValues.forEach(value => {
        if (value?.title === "Owner") {
            subItemKeys.owner = value.id
        } else if (value?.title === "Date") {
            subItemKeys.date = value.id
        } else if (value?.title === "lead") {
            subItemKeys.lead = value.id
        } else if (value?.title === "מספר ליד") {
            subItemKeys.leadId = value.id
        } else if (value?.title ===  "עסקאות") {
            subItemKeys.saleAmount = value.id
        } else if (value?.title === "מקור הליד") {
            subItemKeys.leadComeFrom = value.id
        } else if (value?.title === "אימייל") {
            subItemKeys.email = value.id
        } else if (value?.title === "כתובת") {
            subItemKeys.address = value.id
        } else if (value?.title === "טלפון") {
            subItemKeys.phone = value.id
        }
    })
    console.log('brook check object keys:', JSON.stringify(subItemKeys, null, 2))

    return subItemKeys
}