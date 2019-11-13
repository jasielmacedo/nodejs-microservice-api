const makeUserDb = require('./user.db')
const userDbModel = require('./user.db.model')
const mongoose = require('mongoose');

const url = process.env.DB_URL || 'mongodb://localhost:27017/base'

async function makeDb()
{
    if(mongoose.connection.readyState != 1)
    {
        mongoose.set('useCreateIndex', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useNewUrlParser', true);
        await new Promise((resolve,reject) => {
            mongoose.connect(url, {useNewUrlParser: true}).then(() => {
                resolve(true);
            }).catch(e => {
                reject(e)
            })
        })
    }
        
    return userDbModel;
}

module.exports = makeUserDb({makeDb});