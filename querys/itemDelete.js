module.exports = ( itemId ) => `
mutation {
    delete_item (item_id: ${itemId}) {
        id
    }
}
`