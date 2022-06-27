module.exports = ( boardId, itemId ) => `
  query{
          boards(ids: ${boardId} ) {
            id
            name
            items(ids: ${itemId}) {
              id
              name
              subitems {
                id
                name
                column_values {
                  id
                  value
                  text
                  title
                  description
                  type
                  
                }
              }
            }
          }
}
`