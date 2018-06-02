var http = require('http')
var fs = require('fs')

http.createServer(function(request,response){
    console.log('request come', request.url)

    const html = fs.readFileSync('test.html', 'utf8')
    
    if(request.url === '/') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            // 'Content-Security-policy': 'script-src \'self\'; form-action \'self\'; report-uri /report' 
        })
        response.end(html)
    } else {
        response.writeHead(200, {
            'Content-Type': 'text/javascript',
        })
        response.end('console.log("loaded script")')
    }
    
}).listen(8888)

console.log('server listening on 8888')