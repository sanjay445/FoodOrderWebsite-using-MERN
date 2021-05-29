// DB : customers
// collection : students
const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    firstname: {type:String,require:true},
    lastname:{type:String,require:true},
    place : {type:String,require:true},
	email : {type:String,require:true},
	phone : {type:String,require:true},
	food : {type:String,require:true},
	price : {type:String,require:true},
	quantity: {type:String,require:true},
	total: {type:String,require:true},
	address: {type:String,require:true}
});
module.exports = mongoose.model('Student',studentSchema);