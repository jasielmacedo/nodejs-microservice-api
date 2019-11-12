import Id from '../Id'
import buildMakeUser from './user';

const makeUser = buildMakeUser({Id,validateEmail})

export default makeUser;

function validateEmail(email)
{
    if(email === undefined || email === null)
        return false;

    let reg = RegExp('([\\w-+]+(?:\\.[\\w-+]+)*@(?:[\\w-]+\\.)+[a-zA-Z]{2,7})','i');
    if(reg.exec(email) != null)
        return true;
    return false;
}