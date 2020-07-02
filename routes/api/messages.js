const router = require('express').Router();
const msgsCtrl = require('../../controllers/messages');

router.use(require('../../config/auth'));

router.post('/chat', isAuthenticated, msgsCtrl.sendMessages);
router.get('/chat', isAuthenticated, msgsCtrl.retrieveMessages);

function isAuthenticated(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'not authorized' });
}

module.exports = router;
