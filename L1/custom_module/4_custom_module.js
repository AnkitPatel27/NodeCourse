const names = require("./5_name");
const sayHi = require("./6_function_utils");

sayHi("susan");
sayHi(names.john); //Hello there john
sayHi(names.peter); //Hello there peter

const { items, singlePerson } = require("./7_alternative_way");
require('./8_find_sum')


// const data = {
//   items: "dssf",
//   singlePerson: "fsd",
// };
// const { items:itemsList } = data;
// console.log(itemsList);
