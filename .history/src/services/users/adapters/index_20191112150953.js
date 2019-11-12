const makeUserDb = require('./user.db')
const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient

const url = process.env.DB_URL || 'mongodb://localhost:27017'
const database = process.env.DB_NAMe || 'base'
const client = new MongoClient(url, { useNewUrlParser : true })

async function makeDb()
{
    if(!client.isConnected())
        await client.connect()
    return client.db(database);
}

module.exports = makeUserDb(makeDb);