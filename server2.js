var http = require('http')

http.createServer(function(request,respose){
    console.log('request come', request.url)

    respose.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'X-Test-Cors',
        'Access-Control-Allow-Methods': 'POST, PUT, Delete',
        'Access-Control-Max-Age': '1000'
    })
    respose.end('123')
}).listen(8887)

console.log('server listening on 8887')