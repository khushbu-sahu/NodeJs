// const express= require('express');
// const app= express();

import express from 'express'
const app =express();
app.use(express.static('dist'));

// app.get('/',(req, res)=>{
//     res.send('Server is ready');
// });


//get a list of 5 jokes

app.get('/api/jokes' ,(req, res)=>{
    const jokes=[
        {
            id:1,
            title:'A joke',
            content:'This is a joke'
        },
        {
            id:2,
            title:'B joke',
            content:'This is another joke'
        },
        {
            id:3,
            title:'C joke',
            content:'This is one more joke'
        },
        {
            id:4,
            title:'D joke',
            content:'This is last joke'
        },
    ];
    res.send(jokes);
})

const port = process.env.PORT || 4000;

app.listen(port ,()=>{
    console.log(`Server at http://localhost:${port}`)
});