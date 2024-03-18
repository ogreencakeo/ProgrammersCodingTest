const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    // 백틱과 역슬래시(\)를 사용
    let result = `!@#$%^&*(\\'"<>?:;`
    console.log(result);
});