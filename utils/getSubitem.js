const useFetch = require('./fetch');
const queryColumnValues = require('../querys/getItemColumnValues');

module.exports = async (itemId) => {
    const data = await useFetch(queryColumnValues(itemId))
    const columnValues = data.data?.items[0].column_values;
    const subItemValue = columnValues.filter(value => value.type === "subtasks")

    const courseProdId = JSON.parse(subItemValue[0].value).linkedPulseIds[0].linkedPulseId;
    const courseDevId = JSON.parse(subItemValue[0].value).linkedPulseIds[1].linkedPulseId;

    // const subItemDataProd = await useFetch(queryColumnValues(courseProdId))

    const subItemDataDev = await useFetch(queryColumnValues(courseProdId))

    const subitemColumnValues = subItemDataDev.data?.items[0].column_values;

    const devSubitemIds = {
        owner:'',
        date:'',
        lead:'',
        leadId:'',
        saleAmount:'',
        leadComeFrom:'',
        address:'',
    }

    subitemColumnValues.forEach(value => {

    })

    console.log('brook subitem Dev:', JSON.stringify(subItemDataDev, null, 2))


    // return {courseProdId, courseDevId}
}