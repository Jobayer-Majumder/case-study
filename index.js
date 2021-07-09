const express = require('express')
const app = express();
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: './.env' })

app.use(cors());
app.use(express.json());

const PORT = 5000;


const uri = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASS}@jobayer.eggfq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const apiCollection = client.db(`${process.env.DB_NAME}`).collection(`${process.env.DB_COLLECTION}`);
  
  app.get('/getProduct', (req, res) => {
      apiCollection.find({})
      .toArray((err, documents) => {
        res.send(documents)
      })
  })
  
  console.log('database connected')
});


app.get('/', (req, res) => {
    res.send('server running')
})

app.listen(PORT || process.env.PORT, () => console.log('server is running on'))