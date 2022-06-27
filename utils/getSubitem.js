const useFetch = require('./fetch');
const queryColumnValues = require('../querys/getItemColumnValues');

module.exports = async (itemId) => {
    const data = await useFetch(queryColumnValues(itemId))
        .then(async (response) => {
            const data = await response.json()
            console.log('brook response:', data)
            return data;
        })

    console.log('brook response data 2:', data)

    const columnValues = data.data?.boards[0].items.column_values;

    console.log('brook columnValues:', columnValues)
    const subItemValue = columnValues[0].filter(value => value.type === "subtasks")
    const valueProd = JSON.parse(subItemValue[0].value ).linkedPulseIds[0].linkedPulseId;
    const valueDev = JSON.parse(subItemValue[1].value ).linkedPulseIds[0].linkedPulseId;
    return {valueProd, valueDev}
}