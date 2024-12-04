//For Reading File System  (Asynchronous way)
// const fs=require('fs');

// fs.readFile('text.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
    
//     }
//     else{
//         console.log(data)
//     }
// })

                            //  *******************************************************

//Synchronous way  (when we make synchrouns way then we dont need callback function)
// const fs=require('fs');
// try{
//     const data= fs.readFileSync('text.txt' ,'utf-8');
//     console.log(data)
// }catch(err){
//     console.log(err)
// }

// *************************************************************************************************

//For making(write) file system (we used writeFile when we need to create new file)
// const fs=require('fs');
// fs.writeFile('demo1.txt','Hello',(err)=>{
//     console.log(err)
// })

// appendFile is use for joining the content in the same file that we created

// fs.appendFile('demo1.txt',' I am Khushi',(err)=>{
//     console.log(err)
// })

// fs.appendFile('demo1.txt','and I am from Nagpur',(err)=>{
//     console.log(err)
// })


// **************************************************************

// For deleting the file we can use unlink module
// const fs=require('fs');
// fs.unlink('demo2.txt' ,(err)=>{
//     console.log(err)
// })

// ***********************************************

//for copy the content of file in the new file
const fs=require('fs');
fs.cpSync('./demo1.txt' ,'./demo2.txt')