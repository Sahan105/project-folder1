const mongoose = require('mongoose');
const Schema = mongoose.Schema

const menuSchema= new Schema({
    id:mongoose.Schema.Types.ObjectId,
    name:{type:String ,required:true},
    image:{type:String,required:true},
    price:{type:Number,required:true}
})
module.exports = mongoose.model('Menu',menuSchema,"menus");