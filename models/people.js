const mongoose = require('mongoose');


const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: true 
    },
    age: {
        type: Number,
        min: [0, 'Age must be a positive number'],
        default: 0  
    },
    favoriteFoods: {
        type: [String], 
        default: [] 
    }
});


const Person = mongoose.model('Person', personSchema);

module.exports = Person;