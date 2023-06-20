const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8081;
const bp = require('body-parser');
const filename ='form.html';
const url = path.join(__dirname,'form.html');

app.listen(port,(err)=>{
    if(!err)
    console.log(`Ready listening on ${port}`);
    else
    console.log(`can't start server `,err);
})

app.get('/api/queryParam/',(req,res)=>{
    var data={
        name : req.query.name,
        id : req.query.id,
        designation :req.query.designation
    };
    res.json(data)
})

app.get('/api/pathParam/:name/:id/:designation',(req,res)=>{
    res.json(req.params);
})

app.get('/user',(req,res)=>{
    res.sendFile(url);

})

app.use(bp.urlencoded({extended:true}))

app.post('/api/postData',(req,res)=>{
     const array_data=[];
    const name = req.body.name;
    const id = req.body.id;
    const designation = req.body.designation;
    array_data.push({name,id,designation});
    res.send(array_data);
    res.send('done');
   
})
