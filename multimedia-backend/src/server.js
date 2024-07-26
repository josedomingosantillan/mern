const app = require('./app');

const PORT = process.env.PORT || 6001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
