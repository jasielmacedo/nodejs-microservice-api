module.exports = function makePatchUser({ updateUser })
{
    return async function PatchUser(httpRequest)
    {
        try
        {
            const { id } = httpRequest.params
            const { ...userInfo } = httpRequest.body
            const userUpdated = await updateUser({ id, ...userInfo })

            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 201,
                body: { 
                    success : true,
                    data : userUpdated
                }
            }

        }catch(e){
            return {
                headers: {
                    'Content-Type': 'application/json'
                },

                statusCode: 400,
                body: {
                    success : false,
                    error: e.message
                }
            }
        }
    }
}