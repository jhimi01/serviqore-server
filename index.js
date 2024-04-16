const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const blogs = require('./data/blog.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('blog is running!')
})

app.get('/blogs', (req, res) => {
    res.send(blogs)
})

app.listen(port, () => {
  console.log(`blog api is running on port ${port}`)
})