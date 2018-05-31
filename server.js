var http = require('http')
var fs = require('fs')

http.createServer(function(request,response){
    console.log('request come', request.url)

    if(request.url === '/') {
        const html = fs.readFileSync('test.html', 'utf8')
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })
        response.end(html)
    }

    if(request.url === '/script.js') {
        const etag = request.headers['if-none-match']
        console.log(etag)
        if(etag === '777'){
            response.writeHead(304, {
                'Content-Type': 'text/javascript',
                'Cache-Control': 'max-age=200000000',
                'Last-Modified': '123',
                'Etag': '777'
            })
            response.end('')
        } else {
            response.writeHead(200, {
                'Content-Type': 'text/javascript',
                'Cache-Control': 'max-age=200000000, no-cache',
                'Last-Modified': '123',
                'Etag': '777'
            })
            response.end('console.log("script loaded twice")')
        }
    }

}).listen(8888)

console.log('server listening on 8888')