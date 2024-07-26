const Theme = require('../models/Theme');

exports.createTheme = async (req, res) => {
    const { name, permissions } = req.body;

    try {
        const existingTheme = await Theme.findOne({ name });
        if (existingTheme) return res.status(400).json({ error: 'Theme already exists' });

        const newTheme = new Theme({ name, permissions });
        await newTheme.save();
        res.status(201).json(newTheme);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getThemes = async (req, res) => {
    try {
        const themes = await Theme.find();
        res.status(200).json(themes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
