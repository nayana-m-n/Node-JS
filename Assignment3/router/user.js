const express = require('express')
const User = require('../model/user')
const router = new express.Router()

router.get('/test',(req,res)=>{
    res.send('from a new file')
})


router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try{
      await user.save()
      res.status(201).send(user)
    }catch(error){
      res.status(400).send(error)
    }
  })
  
  router.get('/users',async(req,res)=>{
      try{
          const users = await User.find({})
          res.send(users)
      }catch(e){
          res.status(500).send()
      }
  })
  
  router.patch('/users/:id',async(req,res)=>{
      const updates = Object.keys(req.body)
      const allowUpdates = ['name','age','email']
      const isValidOperation = updates.every((update)=> allowUpdates.includes(update))
  
      if(!isValidOperation){
          return res.send(400).send({error :'invalid update'})
      }
      try{
          const user = await User.findByIdAndUpdate(req.params.id, req.body)
          if(!user){
              return res.status(404).send()
          }
          res.send(user)
      }catch(error){
          res.status(400).send(error)
          console.log(error)
      }
  })

module.exports=router