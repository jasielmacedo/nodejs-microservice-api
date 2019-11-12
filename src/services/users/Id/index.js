const cuid = require('cuid') 

module.exports = Object.freeze({
  createId: cuid,
  isValidId: cuid.isCuid
})