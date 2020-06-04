const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
        _id: mongoose.Schema.Types.ObjectId,
        date:  Date,
        gender: String,
        age: String,
        active: String,
        bmi: Number,
        pressure: String,
        relatives: Array,
        syntoms: Array
});

module.exports = mongoose.model('Users', usersSchema )