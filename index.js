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

app.get('/notes/:id', (req, res) => {
    res.status(200).json(kiwiNotes => kiwiNotes.id === parseInt(req.params.id));
});

app.post('/notes', (req, res) => {
    
    // kiwiNotes.push(req.body);
    kiwiNotes.add(req.body);
    res.send('succesfull');
});

app.delete('/notes/:id', (req, res) => {

    kiwiNotes.remove(note => note.id ===  parseInt(req.params.id));
    res.send('deleted');

});

app.delete('/notes', (req, res) =>{

    kiwiNotes.remove();
    res.send('deleted all');
});

app.listen(1113);