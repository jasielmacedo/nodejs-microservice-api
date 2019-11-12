import userController from './controllers'
import makeCallback from './callback'

export default function makeUserRoutes({ router })
{
    router.post('user/create',makeCallback(userController.postUser)); 
}