import cuid from 'cuid'

const Id = Object.freeze({
  createId: cuid,
  isValidId: cuid.isCuid
})

module.exports = Id