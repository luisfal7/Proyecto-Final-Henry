const SneaksAPI = require('sneaks-api');

const sneaks = new SneaksAPI();

sneaks.getProducts("Yeezy", 10, function(err, products){
 console.log(products)
})