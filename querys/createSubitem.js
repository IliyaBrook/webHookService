module.exports = ( name, parentId, object ) => {
    console.log('brook provided obj:', object)
    console.log('brook provided name:', object)
    console.log('brook provided parentId:', parentId)
    return `
     mutation {
      create_subitem(
      parent_item_id: ${parentId}, 
      item_name: ${name}, 
      column_values: \"{
      \\\"owner\\\":\\\"${object?.owner || 'no value'}\\\",
      \\\"date\\\":\\\"${object?.date || 'no value'}\\\",
      \\\"text_14\\\":\\\"${object?.leadId  || 'no value'}\\\",
      \\\"text\\\":\\\"${object?.leadComeFrom  || 'no value'}\\\",
      \\\"text4\\\":\\\"${object?.address  || 'no value'}\\\",
      \\\"text_17\\\":\\\"${object?.phone  || 'no value'}\\\",
      \\\"text_2\\\":\\\"${object?.email  || 'no value'}\\\",
      \\\"text_196\\\":\\\"${object?.salesMan  || 'no value'}\\\",
      \\\"______\\\":\\\"${object?.saleAmount  || 'no value'}\\\"
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