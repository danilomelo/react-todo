const restful = require('node-restful')
const mongoose = restful.mongoose
const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: false, default: false},
    createAt: { type: Date, default: Date.now }
})

const Todo = restful.model('Todo', todoSchema)

Todo.methods(['post', 'get', 'delete', 'put']);
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo;