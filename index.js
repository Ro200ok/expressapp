const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const coursesRoutes = require('./routes/courses')
const bodyParser = require('body-parser')


const app = express()


// Handlebar config
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')


// Public folder register
app.use(express.static('public'))



// Routes register
app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/courses', coursesRoutes)

// app.use(express.json());

// app.use(express.bodyParser())

// Register middleware

app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Port register
const PORT = process.env.PORT || 3000


// Listen PORT
app.listen(PORT, () => {
    console.log(`Сервер стартовал на ${PORT}`);
})


