const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')
const fileupload = require('express-fileupload')
const path = require('path')
const xss = require('xss-clean')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const rateLimit = require('express-rate-limit')
const hpp = require('hpp')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')

// Load env vars
dotenv.config({ path: './config/config.env' })

//Connect to database
connectDB()

const app = express()

//Body parser
app.use(express.json())
bodyParser.urlencoded({ extended: true})

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use('/css', express.static(__dirname + '/public/css'));
//app.use('/js', express.static(__dirname +'/public/js'));

//Enable CORS
app.use(cors())

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

// Sanitize data
app.use(mongoSanitize())

// Set Security headers
app.use(helmet())

// Prevent XSS attacks
app.use(xss())

// Rate Limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, //10 minutes
    max: 100
})

app.use(limiter)

// Prevent http param pollution
app.use(hpp())

// Mount Routers
app.use('/api/v1/users', require('./routes/users'))


const PORT = process.env.PORT || 8080

const server = app.listen(PORT, '<YOUR IP>' || 'localhost', console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`)
    //Close server & exit process
    server.close(() => process.exit(1))
})