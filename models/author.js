const mongoose = require('mongoose')
const Schema = mongoose.Schema

const authorShema = new Schema({
    name: String,
    age: String 
})

module.exports = mongoose.model('Author', authorShema)