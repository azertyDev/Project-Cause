// import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import dotenv from 'dotenv';
import homeRoute from './server/routes/index';
import mainRoutes from './server/routes/main';

// set up dependencies
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
require('dotenv').config();

// set up mongoose
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true })
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });
mongoose.Promise = global.Promise;

// set up port
const port = process.env.PORT || 3000;

// set up route
homeRoute(app);
app.use('/api/', mainRoutes);
app.get('*', (req, res) => {
  res.status(400).json({
    message: 'This is Project Cause, please see documentation for the proper routes',
  });
});

app.listen(port);

export default app;