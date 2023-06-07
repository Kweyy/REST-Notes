const express = require('express');
const app = express();
const JsonRecords = require('json-records');

const kiwiNotes = new JsonRecords('data.json');

app.use(express.json())

app.get('/notes', (req, res) => {

    // res.status(200).json(kiwiNotes);
    let allKiwiNotes = kiwiNotes.get();
    res.status(200).json(allKiwiNotes);
});

app.post('/notes', (req, res) => {
    
    // kiwiNotes.push(req.body);
    kiwiNotes.add(req.body);
    res.send('succesfull');
});

app.delete('/notes', (req, res) =>{

    // kiwiNotes = kiwiNotes.filter(note => note.id !== req.body.id);
    kiwiNotes.remove(note => note.id === req.body.id);
    res.send('deleted');
})

app.delete('/notes/all', (req, res) =>{

    // kiwiNotes = kiwiNotes.filter(note => note.id !== req.body.id);
    kiwiNotes.remove();
    res.send('deleted all');
})

app.listen(1113);