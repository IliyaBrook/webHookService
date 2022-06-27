const useFetch = require('./fetch');
const queryColumnValues = require('../querys/getItemColumnValues');

module.exports = async (itemId) => {


    const data = await useFetch(queryColumnValues(itemId))
        .then(async (response) => {
            console.log('brook response:', response)
            return response;
        })
    console.log('brook response data 11111:', data)

    const data2 = await useFetch(queryColumnValues(itemId))
    console.log('brook response data 2222:', data2)

    // const columnValues = data.data?.boards[0].items.column_values;
    //
    // console.log('brook columnValues:', columnValues)
    // const subItemValue = columnValues[0].filter(value => value.type === "subtasks")
    // const valueProd = JSON.parse(subItemValue[0].value ).linkedPulseIds[0].linkedPulseId;
    // const valueDev = JSON.parse(subItemValue[1].value ).linkedPulseIds[0].linkedPulseId;
    // return {valueProd, valueDev}
}