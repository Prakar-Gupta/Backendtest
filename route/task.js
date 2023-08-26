const express = require('express')
const Task = require('../model/task')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    const newTask = new Task({
        name: req.body.name,
    })
    try {
        const savedTask = await newTask.save()
        res.status(201).json(savedTask)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.put('/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            }
        )
        res.status(200).json(updatedTask)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) {
            return res.status(404).json('Task not found')
        }
        res.status(200).json('Task deleted successfully')
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;