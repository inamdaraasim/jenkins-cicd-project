const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('i am changing the manually file app.js!');
});

app.listen(3001, '0.0.0.0', () => {
    console.log('Application running on port 3001');
});
