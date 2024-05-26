const { readFile, writeFile } = require('fs')
console.log('start')
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, result) => {
            if (err) {
                reject(err)
            }
            else { resolve(result) }
        })
    })
}
const start = async () => {
    const first = await getText('./content/first.txt');
    const second = await getText('./content/second.txt');
    console.log(first, second);
    writeFile(
        './content/result-async.txt',
        `Here is the result : ${first}, ${second}`,
        (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('done with this task')
        }
    )
}
start();
console.log('starting next task')

