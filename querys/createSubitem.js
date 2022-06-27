module.exports = ( name, parentId, object ) => {
    console.log('brook provided obj:', object)
    return `
     mutation {
      create_subitem(
      parent_item_id: ${parentId}, 
      item_name: ${name}, 
      column_values: \"{
      \\\"owner\\\":\\\"${object.owner}\\\",
      \\\"date\\\":\\\"${object.date}\\\",
      \\\"text_14\\\":\\\"${object.leadId}\\\",
      \\\"text\\\":\\\"${object.leadComeFrom}\\\",
      \\\"text4\\\":\\\"${object.address}\\\",
      \\\"text_17\\\":\\\"${object.phone}\\\",
      \\\"text_2\\\":\\\"${object.email}\\\",
      \\\"text_196\\\":\\\"${object.salesMan}\\\",
      \\\"______\\\":\\\"${object.saleAmount}\\\"
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
}