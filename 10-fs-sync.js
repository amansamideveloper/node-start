// const { readFileSync, writeFileSync } = require('fs')
// console.log('start')
// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

// writeFileSync(
//   './content/result- .txt',
//   `Here is the result : ${first}, ${second}`,
//   { flag: 'a' }
// )
// console.log('done with this task')
// console.log('starting the next one')































const fs = require("fs")


const read = fs.readFileSync('./aman-read.txt', 'utf-8')

console.log(read)
fs.writeFileSync('./aman-read.txt', 'addd another file here ')
console.log(read)