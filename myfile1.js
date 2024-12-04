//First way to import a file
// const result = require('./myfile')

// console.log(result.addfn(3,4))
// console.log(result.subfn(4,7))

//Second way to import a file

const{add , sub}= require('./myfile')


console.log(add(2,6))
console.log(sub(2,6))



