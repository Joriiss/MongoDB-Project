const mongoose = require('mongoose');

// user model schema
const userSchema = new mongoose.Schema({
        // email must be unique and match an email syntax
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Not a valid email address']
        },
        name: {
            type: String,
            required: true
        },
        age : {
            type: Number,
            required: true,
            min: 13
        }
})

module.exports = mongoose.model('User', userSchema)