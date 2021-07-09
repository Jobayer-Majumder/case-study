const express = require('express')
const app = express();
const cors = require('cors');
const { MongoClient } = require('mongodb');

app.use(cors());
app.use(express.json());



const uri = "mongodb+srv://callingApi:callingApi@jobayer.eggfq.mongodb.net/callingAPi?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const apiCollection = client.db("callingApi").collection("productApi");
  
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

app.listen(5000, () => console.log('server is running on'))