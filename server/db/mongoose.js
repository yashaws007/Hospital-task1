var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const uri = 'mongodb+srv://rajeshvr7:Zd7DMuOM9dpCPA9K@cluster0.rmtgtse.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));
