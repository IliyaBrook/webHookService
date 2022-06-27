module.exports = (itemId) => `
     query {
        items(ids:${itemId}) {
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
`