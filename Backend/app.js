const express = require("express")
const app = express()

var cors = require('cors')
app.use(cors())
const path = require('path');

var cors = require('cors')
app.use(cors())

const morgan = require('morgan')
app.use(morgan('dev'))

require('dotenv').config();
const port = process.env.PORT;

require('./dbconn/connection')
 
const list = require('./Routes/listroutes')
app.use('/api', list)

app.listen(port, () => console.log(`Server running on port ${port}`));