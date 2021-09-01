const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  id: { type: Number, required: true },
  main_image: { type: String, required: true },
  image1:  { type: String, required: true },
  image2:  { type: String, required: true },
  image3:  { type: String, required: true },
  image4:  { type: String, required: true },
  image5:  { type: String},
  image6:  { type: String},
  image7:  { type: String},
  image8:  { type: String},
});

module.exports = mongoose.model('Gallery', gallerySchema);