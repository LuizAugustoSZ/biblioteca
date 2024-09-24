const mongoose = require('mongoose');

const connectDatabase = ()=>{

    mongoose.connect('mongodb://127.0.0.1:27017/biblioteca')
    .then(()=> console.log('\nMongo conectado'))
    .catch((error)=> console.log(error));
}

module.exports = connectDatabase