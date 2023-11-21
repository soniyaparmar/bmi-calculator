const bodyparser = require ('body-parser');
const express = require ('express');

const app = express();
app.use(bodyparser.urlencoded({extended:true}));


app.get("/",(req,res)=>{

         res.sendFile(__dirname +'/bmical.html')
    
 });
app.post("/",(req,res)=>{

    var ww = req.body.w;
    var hh = req.body.h;
    var result = ww/((hh*hh)/10000).toFixed;

         res.send("the result is.. "+result)
    
 });
app.listen(3000,()=>{
    console.log("server is working..");
});