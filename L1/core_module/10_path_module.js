
const path = require('path')

console.log(path.sep)

// The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

// The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)