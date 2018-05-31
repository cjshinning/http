var http = require('http')

http.createServer(function(request,respose){
    console.log('request come', request.url)

    respose.writeHead(200, {
        'Access-Control-Allow-Origin': 'http://127.0.0.1:8888'
    })
    respose.end('123')
}).listen(8887)

console.log('server listening on 8887')