const mongoose = require('mongoose');
const {dateTime} = require('../util/dateTime');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    stClass: {
        type: String,
        required: true,
    },
    school: {
        type: String,
        required: true,
    },
    feesamount: {
        type: Number,
        required: true,
    },
    status:{
        type: String,
        default: 'pending',
    },
    date:{
        type: String,
        default: () => dateTime().date,
    },
});

module.exports = mongoose.model('Student', studentSchema);