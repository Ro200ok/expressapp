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

router.post('/', async (req, res) => {
//    const body = res.json({
//         requestBody: req.body
//     })
    
    // console.log(req.body)
    
    const course = new Course(req.body.title, req.body.price, req.body.img)
    await course.save()
    res.redirect('/courses')
})

module.exports = router