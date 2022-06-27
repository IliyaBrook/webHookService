module.exports = ( name, parentId, object ) => {
    console.log('brook provided obj:', object)
    return `
     mutation {
      create_subitem(
      parent_item_id: ${parentId}, 
      item_name: ${name}, 
      column_values: \"{
      \\\"date\\\":\\\"${object.date}\\\",
      \\\"text_17\\\":\\\"${object.phone}\\\",
      \\\"text_2\\\":\\\"${object.email}\\\",
      \\\"______\\\":\\\"${ object.saleAmount }\\\"
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