const { request } = require('express');
const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Books

router.get('/', async (req, res)=>{ //slash is this route, i.e. /api/books
    const books = await loadBooksCollection();
    res.send(await books.find({}).toArray());
}); 

//Add Book

router.post('/', async (req, res) =>{
    const books = await loadBooksCollection();
    await books.insertOne({
        Title: req.body.title,
        Reader: req.body.reader,
        createdAt: new Date()
    });
    res.status(201).send(); //201 means something was created OK.

})

//Delete Book
router.delete('/:id', async (req, res)=>{
    const books = await loadBooksCollection();
    await books.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send();
})

async function loadBooksCollection(){
//    const client = await mongodb.MongoClient.connect('mongodb+srv://admin:V1dyanand@boltipustake.lya5g.mongodb.net/BoltiPustake?retryWrites=true&w=majority', {
    const client = await mongodb.MongoClient.connect('mongodb+srv://admin:V1dyanand499@cluster0.9bfwv.mongodb.net/BoltiPustake?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology:true
    });

    return client.db('BoltiPustake').collection('books');
}
module.exports = router;