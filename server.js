const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const fileupload = require('express-fileupload')
const path = require('path')
const connectDB = require('./config/db')

// Load env vars
dotenv.config({ path: './config/config.env' })

//Connect to database
connectDB()

const app = express()

//Body parser
app.use(express.json())

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname +'/public/js'));

//Dev logging middleware
if(process.env.NODE_ENV === 'development')
{
    app.use(morgan('dev'))
}

//Rendering HTML Page
app.get('/', (req, res) => {
    res.render('index')
});

//File Uploading
app.use(fileupload())

// Mount Routers
app.use('/api/v1/users', require('./routes/users'))


const PORT = process.env.PORT || 8080

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`)
    //Close server & exit process
    server.close(() => process.exit(1))
})