use("CraftShop")
// db.createCollection("Products")
// db.Products.insertOne({
//     "ProductsName":"Shoes",
//     "Price":1000,
//     "Quantity":10
// });
// db.Products.deleteOne({nProductsName:"Shoes"})
// db.Products.drop()


const queries = {
    createCollection: 'db.createCollection("Products")',
    removeCollection: 'db.Products.drop()',
    insertDocument: 'db.Products.insertOne({"ProductsName":"Shoes","Price":1000,"Quantity":10});',
    deleteDocument: 'db.Products.deleteOne({ProductsName:"Shoes"})',
  };
  
  module.exports = queries;