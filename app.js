import express from 'express';
const app = express();

const port = 3000;

app.get('/', (request, respond) => {
    respond.status(200).json({
        message: 'Welcome to Project Cause',
    });
});

app.listen(port);