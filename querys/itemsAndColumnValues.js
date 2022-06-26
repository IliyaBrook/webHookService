module.exports = (boardId, groupId, itemId) => `
     query {
      boards(ids: ${boardId}) {
        groups(ids: "${groupId}") {
          id
          items(ids: ${itemId}) {
            id
            email
            name
            column_values{
              id
              text
              title
              type
              value
            }
          }
        }
      }
    }
`