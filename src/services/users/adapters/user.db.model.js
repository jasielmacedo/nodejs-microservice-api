var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var userSchema = mongoose.Schema({
    name : String,
    email : { type: String, unique: true, index: true, required: true },
    status : Number,
    activationCode : { type: String, select : false },
    createdAt : Number,
    modifiedAt : Number
}, { timestamps: false });

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User',userSchema);