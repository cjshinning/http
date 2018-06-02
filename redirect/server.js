var http = require('http')
var fs = require('fs')
var zlib = require('zlib')

http.createServer(function(request,response){
    console.log('request come', request.url)

    if(request.url === '/'){
        response.writeHead(302, {
            'Location': '/new'
        })
        response.end('')
    }

    if(request.url === '/new'){
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })
        response.end('<div>This is content</div>')
    }
    
}).listen(8888)

console.log('server listening on 8888')