module.exports = ( name, parentId, object ) => `
     mutation {
      create_subitem(
      parent_item_id: ${parentId}, 
      item_name: ${name}, 
      column_values: ${JSON.stringify(object)}
        ){
          column_values{
          id
          title
          value
          text
        }
      }
    }
`