const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Project Cause',
    });
});

app.listen(port, () => {
    console.log(`Our server listening on port ${port}!`);
});