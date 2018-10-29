const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3001
mongoose.connect(process.env.MONGODB_URI)

const PostCard = mongoose.model('Postcard', {
  name: String, 
  partner: String, 
  team: String, 
  length: String, 
  comments: String, 
  options: Object 
})

app.get('/response', async (req, res) => {
  try {
    const postcards = PostCard.find()
    res.send({postcards})
  } catch(error) {
    res.status(400).send()
  }
})

app.post('/response', async (req, res) => {
  try {
    const postcard = new PostCard({
      name: req.body.name,
      partner: req.body.partner,
      length: req.body.length,
      team: req.body.team,
      comments: req.body.comments,
      options: req.body.options
    });
    await postcard.save()
    res.send({postcard})
  } catch(error) {
    res.status(400).send()
  }
})

app.listen(port, () => console.log(`Pairing postcard app listening on port ${port}!`))