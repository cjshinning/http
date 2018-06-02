var http = require('http')
var fs = require('fs')
var zlib = require('zlib')

http.createServer(function(request,response){
    console.log('request come', request.url)

    const html = fs.readFileSync('test.html', 'utf8')
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Encoding': 'gzip'
    })
    response.end(zlib.gzipSync(html))
    
}).listen(8888)

console.log('server listening on 8888')