module.exports = ( name, parentId, object ) => `
     mutation {
      create_subitem(
      parent_item_id: ${parentId}, 
      item_name: ${name}, 
      column_values: \"{
      \\\"person\\\":\\\"${object.owner}\\\",
      \\\"date\\\":\\\"${object.date}\\\",
      \\\"text_196\\\":\\\"${object.lead}\\\",
      \\\"text_14\\\":\\\"${object.leadId}\\\",
      \\\"______\\\":\\\"${object.saleAmount}\\\",
      \\\"text\\\":\\\"${object.leadComeFrom}\\\",
      \\\"text4\\\":\\\"${object.address}\\\",
      \\\"text_17\\\":\\\"${object.phone}\\\",
      \\\"text_2\\\":\\\"${object.email}\\\",
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