const path = require('path')

//in which diirectory we can work
console.log(path.dirname(__filename))

//for fileName
console.log(path.basename(__filename))

//for extension of the file
console.log(path.extname(__filename))

//for more details we used parse
console.log(path.parse(__filename))

//when we want to join just like folder,file then we use join methods
console.log(path.join(__dirname ,'folder1', 'my.js'))
