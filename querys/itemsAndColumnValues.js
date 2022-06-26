module.exports = (boardId, groupId) => `
     query {
      boards(ids: ${boardId}) {
        groups(ids: ${groupId}) {
          id
          items {
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