const Router = require('express');
const router = new Router();
const deviceController = require('../controllers/deviceController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', deviceController.create);
router.get('/get');

module.exports = router;