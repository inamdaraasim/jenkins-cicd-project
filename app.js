const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hi good afternoon elevate lab my Jenkins CI/CD Deployment Successful!');
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Application running on port 3000');
});
