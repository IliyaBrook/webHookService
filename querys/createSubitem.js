module.exports = ( name, parentId, object ) => {
    console.log('brook provided obj:', object)
    console.log('brook provided name:', name)
    console.log('brook provided parentId:', parentId)
    return `
     mutation {
      create_subitem(
      parent_item_id: ${parentId}, 
      item_name: "${name}", 
      column_values: \"{
      \\\"owner\\\":\\\"${object?.owner || 'no owner value'}\\\",
      \\\"date\\\":\\\"${object?.date || 'no date value'}\\\",
      \\\"text_14\\\":\\\"${object?.leadId || 'no leadId value'}\\\",
      \\\"text\\\":\\\"${object?.leadComeFrom || 'no value found'}\\\",
      \\\"text4\\\":\\\"${object?.address || 'no address value'}\\\",
      \\\"text_17\\\":\\\"${object?.phone || 'no phone value'}\\\",
      \\\"text_2\\\":\\\"${object?.email || 'no email value'}\\\",
      \\\"text_196\\\":\\\"${object?.salesMan || 'no sales man value'}\\\",
      \\\"______\\\":\\\"${object?.saleAmount || 'no sale amount value'}\\\"
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