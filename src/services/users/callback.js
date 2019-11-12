module.exports = function makeCallback(controller)
{
    return (req, res) => {
        const HttpRequest = {
            body : req.body,
            query : req.query,
            params : req.params,
            ip : req.ip,
            method : req.method,
            path : req.path,
        }

        controller(HttpRequest).then(httpResponse => {
            if (httpResponse.headers) 
            {
                res.set(httpResponse.headers)
            }
            res.type('json')
            res.status(httpResponse.statusCode).send(httpResponse.body)
        }).catch(e => res.status(500).send({ error: 'An unkown error occurred.' }))
    }
}