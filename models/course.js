// const uuid = require('uuid/v4')

const { v4: uuid } = require('uuid');
uuid();
const fs = require('fs')
const path = require('path')

class Course {

    constructor(title, price, img) {
       this.title = title
       this.price = price
       this.img = img
       this.id = uuid()
    }

    toJSON() {
        return {
            title: this.title,
            price: this.price,
            img: this.img,
            id: this.id
        }
    }

   async save() {
       const courses = await Course.getAll()
       courses.push(this.toJSON())
       console.log(courses);
    }

    static getAll() {
        return new Promise((resolve, reject)=> {
            fs.readFile(path.join(__dirname, '..', 'data', 'courses.json'), 'utf-8', (err, content) => {
                if(err) {reject(err)} else{resolve(JSON.stringify(content))}
                
            })
        })
        
    }
}

module.exports = Course