const http = require('http')
var path = require('path');
var fs = require('fs');
var url = require('url');

const dsyt = {
    name: 'igor',
    age: 21,
    counter: 0,
    increment: function () {
        this.counter++
    }
}

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            err ? reject(err) : resolve(data)
        })
    })
}

let FAVICON = path.join(__dirname, 'favicon.ico');
let counter = 0

const server = http.createServer( async (req, res) => {

    let pathname = url.parse(req.url).pathname;

    if (req.method === 'GET' && pathname === '/favicon.ico') {
        res.setHeader('Content-Type', 'image/x-icon');
        fs.createReadStream(FAVICON).pipe(res);

        return;
    }
    dsyt.increment()

    switch (req.url) {
        case '/name':
            res.write(dsyt.name)
            res.end()
            break
        case '/age':
            res.write(String(dsyt.age))
            res.end()
            break
        case '/':
            const data = await readFile('./pages/home.html')
            res.write(data)
            res.end()
            break
    }
    // res.write(' ' + dsyt.counter)
})


server.listen(3003)