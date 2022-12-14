const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const port = 6000


const app = express()
app.listen(port, ()=>{
    console.log(`server listening on port${port}`)
})