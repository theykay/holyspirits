const mongoose = require('mongoose');

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/holyspirits', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    console.log('db connect success');
  } catch (err) {
    console.log('db connect err');
    console.log(err);    
  }
};

module.exports = db;