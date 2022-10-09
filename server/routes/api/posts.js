const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (_, res) => {
  const posts = await loadPostCollection();
  res.send(await posts.find({}).toArray());
})

router.get('/:id', async (req, res) => {
  const posts = await loadPostCollection();
  res.send(await posts.find({_id: new mongodb.ObjectId(req.params.id)}).toArray());
})

// Add Post
router.post('/', async(req, res) => {
  const posts = await loadPostCollection();
  await posts.insertOne({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
    createdAt: new Date()
  })
  res.status(201).send()
})
// Delete Post
router.delete('/:id', async (req, res) => {
  const posts = await loadPostCollection();
  await posts.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
  res.status(200).send();
})
//Update Post
router.put('/:id', async(req, res) => {
  const posts = await loadPostCollection();
  await posts.updateOne(
    {_id: new mongodb.ObjectId(req.params.id)}, 
    { $set: {
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed
    } }, 
    { upsert: true }, (err, result) => {
      console.log(err)
    })
  res.status(204).send();
})

const loadPostCollection = async () => {
  const client = await mongodb.MongoClient.connect
    ('mongodb+srv://jankurt-project:mNUnIyFpkkObLS87@jankurtb.xsrn97d.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true
    })
  return client.db('jankurtb').collection('posts')
}

module.exports = router;