const Id = require('../Id')
const buildMakeUser = require('./user');

const makeUser = buildMakeUser({fnId : Id,fnValidateEmail : validateEmail})

module.exports = makeUser;

function validateEmail(email)
{
    if(email === undefined || email === null)
        return false;

    let reg = RegExp('([\\w-+]+(?:\\.[\\w-+]+)*@(?:[\\w-]+\\.)+[a-zA-Z]{2,7})','i');
    if(reg.exec(email) != null)
        return true;
    return false;
}