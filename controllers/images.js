const Image = require('../models/image');

module.exports = {
  sendImages,
  retrieveImages,
};

async function sendImages(req, res) {
  try {
    const image = await Image.create(req.body);
    res.json({ image });
  } catch (error) {
    res.status(401).json({ error: 'unauthorized' });
  }
}

async function retrieveImages(req, res) {
  try {
    const images = await Image.find({});
    res.json(images);
  } catch (error) {
    res.status(401).json({ error: 'unauthorized' });
  }
}
