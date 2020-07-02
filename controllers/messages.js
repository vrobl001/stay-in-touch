const Message = require('../models/message');

module.exports = {
  sendMessages,
  retrieveMessages,
};

async function sendMessages(req, res) {
  try {
    const message = await Message.create(req.body);
    res.json({ message });
  } catch (error) {
    res.status(401).json({ error: 'unauthorized' });
  }
}

async function retrieveMessages(req, res) {
  try {
    const messages = await Message.find({});
    res.json(messages);
  } catch (error) {
    res.status(401).json({ error: 'unauthorized' });
  }
}
