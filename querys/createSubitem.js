module.exports = ( object ) => `
     mutation {
      create_subitem(
      parent_item_id: ${object?.parentItemId}, 
      item_name: ${object?.itemName}, 
      column_values: \"{
      \\\"${phoneColumnId}\\\":\\\"${form.phone}\\\",
      \\\"${emailColumnId}\\\":\\\"${form.email}\\\",
      \\\"${leadColumnId}\\\":\\\"${leadId}\\\",
      \\\"${createdAtColumnId}\\\":\\\"${getDate()}\\\",
      \\\"${sourLeadColumnId}\\\":\\\"mpg.org.il\\\"
      }"
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