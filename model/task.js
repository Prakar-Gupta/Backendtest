const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'To Do',
    },
})

module.exports = mongoose.model('Task', taskSchema)