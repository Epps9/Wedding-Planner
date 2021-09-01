const express = require('express');
const router = express.Router();

const Gallery = require('./gallery.model');

router.get('/gallery', async (req, res) => {
    try {
      res.json(await Gallery.find());
    }
    catch {
      res.status(500).json({ message: err });
    }
});

module.exports = router;
