const http = require('http');
const express = require('express');
const app= express();

app.use(express.static(process.cwd()+"/build/index.html"));
app.set('view engine' ,'html');


http.createServer(function(request, response) {

writeHead(200, {'Content-Type': 'text/html'});

end('<H1>Server Portfolio</H1>');

}).listen(process.env.PORT);

console.log('App is running…');







