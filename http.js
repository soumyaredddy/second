var http = require('http');
var seever = http.createServer(function(request,responce){
    console.log("got a reqquest");
    responce.write('hi');
    responce.end();
    
}
);
server.listen(3000);
