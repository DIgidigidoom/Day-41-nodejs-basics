import fs from 'fs'



sumFromFile('data-ex2.txt')
    .then(sum => {
        sum = sum.split('\r\n')
        console.log("sum: ", sum)
        sum = sum.reduce((acc, number) => acc + parseInt(number), 0)
        console.log("sum: ", sum)
    })
    .catch(err => console.log('Cannot sum:', err))


function sumFromFile(path) {
    return new Promise((resolve, rejecct) => {
        fs.readFile(path, 'utf8', (err, content) => {
            if (err) return reject(err)
            resolve(content)
        })
    })
}