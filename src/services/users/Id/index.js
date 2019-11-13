const mongoose = require('mongoose');

module.exports = Object.freeze({
  createId: () => mongoose.Types.ObjectId(),
  isValidId: mongoose.Types.ObjectId.isValid
})