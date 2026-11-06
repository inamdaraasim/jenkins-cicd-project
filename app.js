const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Version 2 - Automatically Deployed by Jenkins!');
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Application running on port 3000');
});
