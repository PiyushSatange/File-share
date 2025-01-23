require('dotenv').config();
const express = require('express');
const {router} = require('./routes/index');
const app = express();

app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use("/api", router);



app.listen(process.env.PORT, ()=>{
    console.log("server running at port ", process.env.PORT);
})