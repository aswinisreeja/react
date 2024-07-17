const cp=require('child_process')


console.log('trying to open calculator')


cp.execSync('calc')

console.log('opened')

cp.execSync('start chrome https://mail.google.com/mail/u/0/?tab=rm&ogbl&hl=en_GB#inbox')
