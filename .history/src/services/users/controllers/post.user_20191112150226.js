module.exports = function makePostUser({ createUser })
{
    return async function PostUser(httpRequest)
    {
        try
        {
            const { ...userInfo } = httpRequest.body
            const userCreated = await createUser({ ...userInfo })

            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 201,
                body: { 
                    success : true,
                    data : userCreated
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