const express = require('express')

const app = express()

const data=[{id:1 , title:'pants' , price:3000},{id:2 , title:'sareee' , price:4000} ,{id:3 , title:'clothes' , price:8000}]

//middleware  for post the data
app.use(express.json())

app.get('/' ,(req, res)=>{
    res.json(data)

})

//For getting single data 
app.get('/:id' ,(req, res)=>{
const singlepost = data.find((para)=> para.id === parseInt(req.params.id))

//Terniary operator we can use 
singlepost ? res.json(singlepost) : res.status(404). send('page not found') 
})

app.post('/',(req,res)=>{
    const newdata={id:data.length +1 , ...req.body }

    //for pushing data
    data.push(newdata)
    //resending the data because we want updated data 
    res.status(201).json(newdata)
})

//for updating the data

app.put('/:id' ,(req ,res)=>{
    const updatedata = data.find(p=>p.id === parseInt(req.params.id))
    if(updatedata){
        Object.assign(updatedata , req.body)
        res.json(updatedata)
    }else{
        res.status(404).send('page is not found')
    }
})

//deleting the data
app.delete('/:id' ,(req , res)=>{
    const ids=parseInt(req.params.id);
const indexno = data.findIndex(p=>p.id == ids)
data.splice(indexno , 1)
res.status(204).send();
})
app.listen(3000 , ()=>{
    console.log('server started')
})