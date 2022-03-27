http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    switch (req, res){
        case'/':
        res.end('index')
        break
    
        case'/contato':
        res.end('contacto');
        break
        
        case '/sobre':
        res.end('sobre');
        break
    }
    }).listen(8080, 'localhost');
