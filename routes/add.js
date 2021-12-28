const {Router} = require('express')
const bodyParser = require('body-parser')
const Course = require('../models/course')
const {Schema, model} = require('mongoose');
const router = Router()

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Add new',
        isAdd: true
    })
})

router.post('/', async (req, res) => {

    
    const course = new Course({
        title: req.body.title,
        price: req.body.price,
        img: req.body.img
    })
    
    try {

        
        await course.save()
        res.redirect('/courses')
    } catch (e) {
        console.log(e);
    }
    
    
    
})

module.exports = router