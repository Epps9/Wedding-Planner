const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();


const galleryRoutes = require('./gallery.routes');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', galleryRoutes);


/* MONGOOSE */
mongoose.connect('mongodb+srv://Ewa:kodilla@cluster0.wsukt.mongodb.net/WeddingPlanner?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;


db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));



/* START SERVER */

app.listen(8000, () => {
    console.log('server is running on 8000');
});