const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const excerciseSechema = new Schema({
    username: { type: String, required: true},
    description: {type: String, required: true},
    duration: { type: Number, required: true},
    date: { type: date, required: true},
}, {
    timestamps: true,
});

const Excercise = mongoose.model('Excercise',userSchema);

module.exports = Excercise;