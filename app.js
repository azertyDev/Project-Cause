// import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import mainRoutes from './server/routes/main';


// set up dependencies
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

// set up route
app.use('/api/', mainRoutes);

// set up mongoose
mongoose.connect('mongodb://localhost/projectcause', { useNewUrlParser: true })
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });

  // set up port
const port = 3000;
// set up route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Project Cause',
  });
});

app.listen(port);