const { readFileSync, writeFileSync,appendFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//Flag-a is used to append the content to the file
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
)

appendFileSync(
  './content/first.txt',
  `Here is the result : ${first}, ${second}`,
)

writeFileSync(
    './content/result-sync.txt',
    `Here is: ${first}, ${second}`,
    { flag: 'a' }
  )

console.log('done with this task')
console.log('starting the next one')