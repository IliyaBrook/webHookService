module.exports = ( name, parentId, object ) => `
     mutation {
      create_subitem(
      parent_item_id: ${parentId}, 
      item_name: ${name}, 
      column_values: \"{
      \\\"text_17\\\":\\\"${object.phone}\\\",
      \\\"text_2\\\":\\\"${object.email}\\\",
      \\\"text_14\\\":\\\"${object.leadId}\\\",
      \\\"text4\\\":\\\"${object.address}\\\",
      \\\""text"\\\":\\\"mpg.org.il\\\"
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