const UserSchema = require('./UserSchema')
const mongoose = require('mongoose')

module.exports = mongoose.model('User', UserSchema)
