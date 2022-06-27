const useFetch = require('./fetch');
const queryColumnValues = require('../querys/getItemColumnValues');

module.exports = async (itemId) => {
    const response = await useFetch(queryColumnValues(itemId))
    const columnValues = response.data?.boards[0].items[0].column_values;
    console.log('brook boards:', response.data?.boards)
    console.log('brook columnValues:', columnValues)

    const subItemValue = columnValues[0].filter(value => value.type === "subtasks")
    const valueProd = JSON.parse(subItemValue[0].value ).linkedPulseIds[0].linkedPulseId;
    const valueDev = JSON.parse(subItemValue[1].value ).linkedPulseIds[0].linkedPulseId;
    return {valueProd, valueDev}
}