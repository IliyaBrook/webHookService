module.exports = ( name, parentId, object ) => {
    console.log('brook provided obj:', object)
    console.log('brook provided name:', name)
    console.log('brook provided parentId:', parentId)
    const date = '28/06/2022'
    return `
     mutation {
      create_subitem(
      parent_item_id: ${parentId}, 
      item_name: ${name}, 
      column_values: \"{
      \\\"owner\\\":\\\"${object.owner}\\\",
      \\\"date\\\":\\\"${date}\\\",
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