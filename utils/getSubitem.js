const useFetch = require('./fetch');
const queryColumnValues = require('../querys/getItemColumnValues');
const getSubItem = require('../querys/getSubItem');

module.exports = async (itemId, boardId) => {

    const data = await useFetch(getSubItem(boardId, itemId))

    console.log('brook subItemColumnValues2:', JSON.stringify(data, null, 2))

    const devSubitemIds = {
        owner:'',
        date:'',
        lead:'',
        leadId:'',
        saleAmount:'',
        leadComeFrom:'',
        address:'',
    }

    const subItemColumnValues =  data.boards[0].items[0].subitems[0].column_values;

    console.log('brook check get column values:', subItemColumnValues)
}