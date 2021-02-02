const http = require('http');
const os = require('os');

console.log("Starting...");
cost handler = (req,res) => { 
 response.writeHead(200);  
 response.end("You've connected to " + os.hostname() + "\n")
}
const app = http.createServer(handler)
app.listen(8080);
