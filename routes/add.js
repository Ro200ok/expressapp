const {Router} = require('express')
const bodyParser = require('body-parser')
const Course = require('../models/course')
const router = Router()

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Add new',
        isAdd: true
    })
})

router.post('/', (req, res) => {
    console.log(req.body)
    const course = new Course(req.body.title, req.body.price, req.body.img)
    res.redirect('/courses')
})

module.exports = router