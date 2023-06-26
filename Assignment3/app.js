const express = require('express')
const app = express()
require('./model/mongoose')

const userRouter = require('./router/user')

app.use(express.json())
app.use(userRouter)

module.exports=app