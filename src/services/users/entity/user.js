module.exports = function buildMakeUser({ fnId, fnValidateEmail })
{
    return function makeUser({
        id = fnId.createId(),
        name,
        email,
        createAt = Date.now(),
        modifiedAt = Date.now(),
        status = 1,
    } = {})
    {
        if(!fnId.isValidId(id))
            throw new Error('User must have a valid id');

        if(!name)
            throw new Error('User must have a name');

        if(name.lenght < 2)
            throw new Error("User's name must be longer than 2 characters.");

        if(!email || !fnValidateEmail(email))
            throw new Error("User's email must be valid");

        if(!modifiedAt)
            modifiedAt = Date.now()

        return Object.freeze({
            getId : () => id,
            getName : () => name,
            getEmail : () => email,
            getCreatedAt : () => createAt,
            getModifiedAt : () => modifiedAt,
            getStatus : () => status,
            markDeleted : () => { status = 2 },
            markInative : () =>{ status = 0 },
            markActive : () =>{ status = 1 }
        });
    }
}