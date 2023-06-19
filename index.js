const express = require('express');
const app = express();
require('dotenv').config
const PORT = process.env.PORT || 3000;

// app.use(json());
// app.createServer('/',(res)=>
// {
//     res.end('Hello World');
// })

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});