const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
const mongoose = require('mongoose');

dotenv.config({path: './.env'})

const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully!")
})


const exercisesRouter = require("./routes/exercises")
const usersRouter = require('./routes/users')

app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})