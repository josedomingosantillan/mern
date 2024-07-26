const express = require('express');
const router = express.Router();
const { createContent, getContents } = require('../controllers/contentController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/create', createContent);
router.get('/', getContents);

module.exports = router;
