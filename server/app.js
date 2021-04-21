const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const { MONGOURI } = require('./keys')

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

require('./models/user')
require('./models/transactions')
app.use(express.json())
app.use(require('./routes/auth'))

mongoose.connection.on('connected',()=>{
    console.log("successfully connected to the database")
})
mongoose.connection.on('error',(error)=>{
    console.log("There was an error while connecting to the database: ",error)
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})