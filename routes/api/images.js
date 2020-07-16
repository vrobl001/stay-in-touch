const router = require('express').Router();
const imgsCtrl = require('../../controllers/images');

router.use(require('../../config/auth'));

router.post('/', isAuthenticated, imgsCtrl.sendImages);
router.get('/', isAuthenticated, imgsCtrl.retrieveImages);

function isAuthenticated(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'not authorized' });
}

module.exports = router;
