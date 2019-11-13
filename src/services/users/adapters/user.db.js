const Id = require('../Id')

const COLLECTION = 'users';

module.exports = function makeUserDb({ makeDb })
{
    async function findById({ id : _id})
    {
        const db = await makeDb()
        const result = await db.findOne({ _id })

        if(!result)
            return null
        
        const { _id : id, ...info} = result.toObject()
        return { id, ...info }
    }

    async function findByEmail({ email })
    {
        const db = await makeDb()
        const result = await db.findOne({ email })

        if(!result)
            return null
        
        const { _id : id, ...info} = result.toObject()
        return { id, ...info }
    }

    async function insert ({ id: _id = Id.makeId(), ...userInfo }) {
        const db = await makeDb()

        const obj = new db({ _id, ...userInfo })

        const result = await obj.save()

        if(!result)
            return null;

        const { _id: id, ...insertedInfo } = result.toObject()
        return { id, ...insertedInfo }
    }

    async function update ({ id: _id, ...userInfo }) 
    {
        const db = await makeDb()
        const result = await db.findOneAndUpdate({ _id }, { ...userInfo },{
            new: true
          })
        return result ? { id: _id, ...userInfo } : null
    }
    
    
    return Object.freeze({
        findById,
        findByEmail,
        insert,
        update
    })
}