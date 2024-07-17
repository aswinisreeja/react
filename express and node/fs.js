const fs= require('fs')


let content=fs.readFileSync('test1.txt', 'utf8')
console.log(content)
fs.writeFileSync('test2.txt', 'this is modified','utf8')
console.log('modified')
fs.appendFileSync('test3.txt',"  this is the data that was appended",'utf8')
fs.unlinkSync("test4.txt",'utf8')