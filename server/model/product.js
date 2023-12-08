const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ProductSchema = new Schema({

    coverImage: String,
    name:{type: String,reqired:true,max:[60,'最大６０文字までです']},
    price: Number,
    description: String,
    heading1: String,
    heading2: String,
    heading3: String,
    headingtext1: String,
    headingtext2: String,
    headingtext3: String,
})

module.exports = mongoose.model('Product',ProductSchema)