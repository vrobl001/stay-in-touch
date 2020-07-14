const router = require('express').Router();
const imgsCtrl = require('../../controllers/images');

router.post('/', imgsCtrl.sendImages);
router.get('/', imgsCtrl.retrieveImages);

module.exports = router;
