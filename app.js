// // console.log('Welcome to Node Tutorial')

// const os = require('os')

// // info about current user
// const user = os.homedir()
// console.log(user)
// // info about home dir
// const homedir = os.homedir()
// console.log(homedir)

// // info about up date
// const update = os.uptime()
// console.log(update)


// const path = require('path')

// console.log(path)

const lodash = require('lodash')

const items = [1, [1, 2, [4]], 5]
// to show itrms in array
const newItems = lodash.flatMapDeep(items)

console.log(newItems)