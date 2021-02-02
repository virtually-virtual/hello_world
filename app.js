const http = require('http');
const os = require('os');

console.log("Starting...");
const handler = (req,res) => { 
 res.writeHead(200);  
 res.end("You've connected to " + os.hostname() + "\n")
}
const app = http.createServer(handler)
app.listen(8080);
