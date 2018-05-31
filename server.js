var http = require('http')
var fs = require('fs')

http.createServer(function(request,respose){
    console.log('request come', request.url)

    if(request.url === '/') {
        const html = fs.readFileSync('test.html', 'utf8')
        respose.writeHead(200, {
            'Content-Type': 'text/html'
        })
        respose.end(html)
    }

    if(request.url === '/script.js') {
        respose.writeHead(200, {
            'Content-Type': 'text/javascript',
            'Cache-Control': 'max-age=200'
        })
        respose.end('console.log("script loaded twice")')
    }

}).listen(8888)

console.log('server listening on 8888')