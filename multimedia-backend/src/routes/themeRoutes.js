const express = require('express');
const router = express.Router();
const { createTheme, getThemes } = require('../controllers/themeController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/create', authMiddleware('admin'), createTheme);
router.get('/', getThemes);

module.exports = router;
