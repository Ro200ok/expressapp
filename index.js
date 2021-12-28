const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const cardRoutes = require('./routes/card')
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
app.use(express.static(path.join(__dirname, 'public')))

// Register middleware

app.use(express.urlencoded({
    extended: true
}))
// app.use(bodyParser.json())

// Routes register
app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/courses', coursesRoutes)
app.use('/card', cardRoutes)

app.use(express.json());

// app.use(express.bodyParser())


// app.use(bodyParser.urlencoded({extended: true}))

// Port register
const PORT = process.env.PORT || 3000

async function start() {

    try {

        const url = 'mongodb+srv://Ro:y2xxtLqG7Q2RfpJ9@cluster0.shnx7.mongodb.net/Adminka'
        await mongoose.connect(url, {
            useNewUrlParser: true
            
        })

        // Listen PORT
        app.listen(PORT, () => {
            console.log(`Сервер стартовал на ${PORT}`);
        })

    } catch (e) {
        console.log(e);
    }
}

start()



// const password = 'y2xxtLqG7Q2RfpJ9'