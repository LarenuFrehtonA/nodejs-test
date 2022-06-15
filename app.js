var http = require('http');
var server = http.createServer(function(req, res)
{
    res.write("start");
    res.end("finish");
});

server.listen(3131);