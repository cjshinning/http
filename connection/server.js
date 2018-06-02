var http = require('http')
var fs = require('fs')

http.createServer(function(request,response){
    console.log('request come', request.url)

    const html = fs.readFileSync('test.html', 'utf8')
    const img = fs.readFileSync('test.jpg')
    if(request.url === '/'){
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'Set-Cookie': ['id=123; max-age=2', 'abc=456'],
            'Connection': 'close'
        })
        response.end(html)
    }else{
        response.writeHead(200, {
            'Content-Type': 'text/jpg',
            'Connection': 'close'
        })
        response.end(img)
    }
    
}).listen(8888)

console.log('server listening on 8888')