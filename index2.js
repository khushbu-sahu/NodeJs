require('dotenv').config()
const express = require('express')
const app = express()
const port =3000
// const githubData ={
//     "login" :"Khushboo sahu",
//     "id":4
// }


app.get('/' ,(req , res) => {
    res.send('hello World')
})

app.get('/twitter' ,(req, res)=>{
    res.send('Hello Twitter')
})

app.get('/login' , (req , res)=>{
    res.send('<h1>Login Page</h1>')

})

app.get('/github', (req,res)=>{
    res.json(githubData)
})
// app.listen(port ,() =>{
//     console.log(`Example app listening on port ${port}`)
// })


app.listen(process.env.PORT ,() =>{
    console.log(`Example app listening on port ${port}`)
})
