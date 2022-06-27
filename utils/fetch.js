const fetch = require('node-fetch');

module.exports = async (query) => {
    const mondayToken = process.env.MONDAY_GRAPHQL_TOKEN;
    try {
         await fetch ("https://api.monday.com/v2", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : mondayToken
            },
            body: JSON.stringify({
                'query' : query
            })
        })
    }catch (e) {
        console.log(`Error during fetch to monday:${e}`)
    }
}