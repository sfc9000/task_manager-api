// const e = require('express')
const express = require ('express')
const { findById } = require('./models/tasks')
require('./db/mongoose')
const Task = require('./models/tasks')
const User = require('./models/user')
    
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
    //----------this code doesnt use async await------
    //
    // user.save().then(() => {
    //     res.status(201).send(user)
    // }).catch((e) => {
    //     res.status(400).send(e)})
    //-----------------------------------------
})

app.get('/users', async (req,res) =>{
        try {
            const users = await User.find({})
            res.send(users)
        } catch (e) {
            res.status(500).send()
        }
})

app.get('/users/:id', async (req,res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)
        if (!user)
        {  return res.status(404).send()  }

        res.send(user)
    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
})

app.post('/tasks', (req, res) => {
    const task = new Task(req.body)

    try {
        task.save()
        res.status(201).send(task)
    } catch (error) {
        res.status(400).send(error)
    }

    //----------this code doesnt use async await------
    //  task.save().then(() => {
    //      res.status(201).send(task)
    //  }).catch((e) => {
    //      res.status(400).send(e)
    // })
    //--------------------------------------------

})

app.get('/tasks', async (req,res) => {

    try {
        const task = await Task.find({})
        res.send(task)

    } catch (e) {
        console.log(e)
        res.status(500).send()
    }

    //no async --------------------
    // Task.find({
    // }).then((tasks) => {
    //     res.send(tasks)
    // }).catch((e) => {
    //     res.send(e)
    // })
    //===============================
   })

app.get('/tasks/:id', async(req,res) => {
    const _id = req.params.id
    try {
        const task = await Task.findById(_id)

        if(!task){ return res.status(404).send()}
        res.send(task)
    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
    //no async----------------------------------------
    // Task.findById(_id).then((tasks) => {
    //     if(!tasks){ return res.status(404).send}
    // res.send(tasks)
    // }).catch((e) => { 
    //     res.status(500).send()
    // })  
    //------------------------------------------------
})




app.listen(port,() => {
    console.log(`Server is up and runing on ${port}`)
})