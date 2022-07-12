const { readFile, writeFile } = require ('fs')

console.log('start');
readFile('./folder/first.txt','utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first = result
    readFile('./folder/second.txt','utf8', (err, result) =>{
        if(err) { 
            console.log(err);
            return
        }
        const second = result
        writeFile(
            './folder/newfile.txt',
            `Here is the result : ${first}, ${second}`,
            (err, result) =>{
                if(err) {
                    console.log(err);
                    return
                }
                console.log('dont with this task');
            }
        )
    })
})
console.log('starting new task');