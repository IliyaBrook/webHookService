const useFetch = require('./fetch');
const queryColumnValues = require('../querys/getItemColumnValues');

module.exports = async (itemId) => {


    const data = await useFetch(queryColumnValues(itemId))
    console.log('brook response data:', JSON.stringify(data, null, 2))
    console.log('////end//// await useFetch(queryColumnValues(itemId))')
    const columnValues = data.data?.items[0].column_values;

    console.log('brook columnValues:', columnValues)
    const subItemValue = columnValues.filter(value => {
        console.log('brook filter each:', value)
        return value.type === "subtasks"
    })
    console.log('brook subItemValue result:', subItemValue)
    console.log('brook subItemValue result [0]:', subItemValue[0])
    // const valueProd = JSON.parse(subItemValue[0].value ).linkedPulseIds[0].linkedPulseId;
    // const valueDev = JSON.parse(subItemValue[1].value ).linkedPulseIds[0].linkedPulseId;
    // return {valueProd, valueDev}
}