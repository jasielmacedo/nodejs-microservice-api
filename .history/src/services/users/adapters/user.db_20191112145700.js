import Id from '../Id'

const COLLECTION = 'users';

export default function makeUserDb({ makeDb })
{
    async function findById({ id : _id})
    {
        const db = await makeDb()
        const result = await db.collection(COLLECTION).find({ _id })
        const found = await result.toArray()
        if(found.length === 0)
            return null
        
        const { _id : id, ...info} = found[0]
        return { id, ...info }
    }

    async function findByEmail({ email })
    {
        const db = await makeDb()
        const result = await db.collection(COLLECTION).find({ email : email })
        const found = await result.toArray()
        if(found.length === 0)
            return null
        
        const { _id : id, ...info} = found[0]
        return { id, ...info }
    }

    async function insert ({ id: _id = Id.makeId(), ...userInfo }) {
        const db = await makeDb()
        const result = await db.collection(COLLECTION).insertOne({ _id, ...userInfo })
        const { _id: id, ...insertedInfo } = result.ops[0]
        return { id, ...insertedInfo }
    }

    async function update ({ id: _id, ...userInfo }) 
    {
        const db = await makeDb()
        const result = await db
          .collection(COLLECTION)
          .updateOne({ _id }, { $set: { ...userInfo } })
        return result.modifiedCount > 0 ? { id: _id, ...userInfo } : null
    }
    
    
    return Object.freeze({
        findById,
        findByEmail,
        insert,
        update
    })
}