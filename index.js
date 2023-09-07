var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {

    if (req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        switch (req.url) {
            case '/Create-Account.html':
                console.log("Attempting to load '/Create-Account.html' | URL=" + req.url);
                console.log(req);
                fs.createReadStream("/Users/cjohn/Desktop/Desktop Items to Sort/Javascript/Volleyball-Sign-up/html/Create-Account.html", "UTF-8").pipe(res);
                console.log("---------------");
                break;
            case '/User-Profile-View.html':
                console.log("Attempting to load '/User-Profile-View.html' | URL=" + req.url);
                console.log(req);
                fs.createReadStream("/Users/cjohn/Desktop/Desktop Items to Sort/Javascript/Volleyball-Sign-up/html/User-Profile-view.html", "UTF-8").pipe(res);
                console.log("---------------");
                break;
            case '/Sign-In.html':
                console.log("Attempting to load '/Sign-In.html' | URL=" + req.url);
                console.log(req);
                fs.createReadStream("/Users/cjohn/Desktop/Desktop Items to Sort/Javascript/Volleyball-Sign-up/html/Sign-In.html", "UTF-8").pipe(res);
                console.log("---------------");
                break;
            case '/index.html':
                console.log("Attempting to load '/index.html' | URL=" + req.url);
                console.log(req);
                fs.createReadStream("/Users/cjohn/Desktop/Desktop Items to Sort/Javascript/Volleyball-Sign-up/html/index.html", "UTF-8").pipe(res);
                console.log("---------------");
                break;
            case '/resources/demos/style.css':
                console.log("Attempting to load '/resources/demos/style.css' | URL=" + req.url);
                console.log(req);
                fs.createReadStream("/Users/cjohn/Desktop/Desktop Items to Sort/Javascript/Volleyball-Sign-up/css/style.css", "UTF-8").pipe(res);
                console.log("---------------");
                break;
            case '/css/CSS-Reset.css':
                console.log("Attempting to load '/css/CSS-Reset.css' | URL=" + req.url);
                console.log(req);
                fs.createReadStream("/Users/cjohn/Desktop/Desktop Items to Sort/Javascript/Volleyball-Sign-up/css/CSS-Reset.css", "UTF-8").pipe(res);
                console.log("---------------");
                break;
            case '/favicon.ico':
                console.log("Attempting to load '/favicon.ico' | URL=" + req.url);
                console.log(req);
                fs.createReadStream("/Users/cjohn/Desktop/Desktop Items to Sort/Javascript/Volleyball-Sign-up/favicon.ico", "UTF-8").pipe(res);
                console.log("---------------");
                break;
            default:
                console.log("Default: Attempting to load '/index.htm'");
                console.log(req);
                fs.createReadStream("/Users/cjohn/Desktop/Desktop Items to Sort/Javascript/Volleyball-Sign-up/html/index.html", "UTF-8").pipe(res);
                console.log("---------------");
                break;
        }

    } else if (req.method === "POST") {
    
        var body = "";
        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function(){
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(body);
        });
    }

}).listen(3000);