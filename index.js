// const http= require ('http')

// const server =http.createServer((req , res)=>{
// res.end('<h1>hello , I am khushi</h1>')
// });
// server.listen(6500)



const http=require('http')
const fs=require('fs')
const path=require('path')

const app=http.createServer((req,res)=>{

    console.log('req detail' , req.url)
    res.writeHead(200 ,{
        'Content-Type' : 'text/plain'
        // 'Content-Type' : 'text/html'
    })

if(req.url== '/'){
    fs.readFile(path.join(__dirname ,'public' , 'index.html'),(err,data)=>{
        if(err){
            throw err
        }
        res.end(data)
    })
} else if(req.url =='/about'){

    fs.readFile(path.join(__dirname ,'public' ,'about.html'),(err,data)=>{
        if(err){
            throw err
        }
        res.end(data)
    })
}
})

const port=process.env.PORT || 9000
app.listen(5000 ,()=>{
    console.log(`server Started ${port}`)
})