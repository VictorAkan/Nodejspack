// var fs = require('fs')
// var http = require('http')

// http.createServer((req, res) => {
//     // const result = fs.readFileSync('./content/big.txt', 'utf8')
//     // res.end(result)
//     const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
//     fileStream.on('open', () => {
//         fileStream.pipe(res)
//     })
//     fileStream.on('error', (err) => {
//         res.end(err)
//     })
// }).listen(5000)

var fs = require('fs')
var http = require('http')

http.createServer((req, res) => {
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
}).listen(5000)