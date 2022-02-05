var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {

  fs.readFile('index.html', (err, data) => {
    if (err) throw err

    res.writeHead(200, { 'Content-Type': 'text-html' })
    res.write(data);
  })

  res.writeHead(200, { 'Content-Type': 'text/html' });
  var url = req.url;

  if (url === '/') {
    fs.readFile('Home.html', function (err, data) {
      res.end(data)
    })
  }
  else if (url === '/visimisi') {
    fs.readFile('visimisi.html', function (err, data) {
      res.end(data)
    })
  }
  else if (url === '/sambutan') {
    fs.readFile('sambutan.html', function (err, data) {
      res.end(data)
    })
  }
  else if (url === '/Blog') {
    fs.readFile('Blog.html', function (err, data) {
      res.end(data)
    })
  }
  else if (url === '/perpus') {
    fs.readFile('perpus.html', function (err, data) {
      res.end(data)
    })
  }
  else if (url === '/contoh') {
    res.writeHead(200, { 'Content-Type': 'application/pdf' });
    fs.readFile('asset/sample.pdf', function (err, data) {
      res.end(data)
    })
  }
  else {
    res.write('<center>Welcome to main</center>');
  }

}).listen(3030, function () {

  console.log("server start at http://localhost:3030");
});