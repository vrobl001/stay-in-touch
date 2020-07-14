const router = require('express').Router();
const imgsCtrl = require('../../controllers/messages');

router.post('/', imgsCtrl.sendMessages);
router.get('/', imgsCtrl.retrieveMessages);

module.exports = router;
