const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();


const galleryRoutes = require('./gallery.routes');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', galleryRoutes);

//API ERROR PAGES 
app.use('/api', (req, res) => {
  res.status(404).send({ message: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});


/* MONGOOSE */
mongoose.connect('mongodb+srv://Ewa:kodilla@cluster0.wsukt.mongodb.net/WeddingPlanner?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;


db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));



/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log('server is running on 8000');
});