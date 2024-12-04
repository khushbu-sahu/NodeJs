function add(x,y){
    return x+y
}

function sub(x,y){
    return x-y
}

//First way
// module.exports={
//     addfn:add ,
//     subfn:sub
// }


//Second way
module.exports={
    add,
    sub
}