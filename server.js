
//initialize a new app by calling express()
const express=require("express");
const app= express();
//cors as a middleware.
const cors= require('cors')
// listen to a login route with app.use. 
app.use(cors());
app.use("/login",(req,res)=>{
    res.send({
        token:'test123'
    });
});

//run the server on port 8080 using app.listen:
app.listen(8080,()=>console.log("app is running on 8080 port"))