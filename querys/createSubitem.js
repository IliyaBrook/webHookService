module.exports = ( name, parentId, object ) => {
    console.log('brook provided obj:', object)
    console.log('brook provided name:', name)
    console.log('brook provided parentId:', parentId)
    return `
     mutation {
      create_subitem(
      parent_item_id: ${parentId}, 
      item_name: ${name}
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