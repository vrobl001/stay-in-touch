const router = require('express').Router();
const msgsCtrl = require('../../controllers/messages');

router.use(require('../../config/auth'));

router.post('/', isAuthenticated, msgsCtrl.sendMessages);
router.get('/', isAuthenticated, msgsCtrl.retrieveMessages);

function isAuthenticated(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'not authorized' });
}

module.exports = router;
