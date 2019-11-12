import cuid from 'cuid'

const Id = Object.freeze({
  createId: cuid,
  isValidId: cuid.isCuid
})

export default Id