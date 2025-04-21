import fs from 'fs'
import ms from 'ms'

getMsData()

function getMsData(){
    let content = fs.readFileSync('data.txt', 'utf8')
    console.log('content:', content)
    formatData(content)
}


function formatData(content){
content = content.split('\r\n')
console.log('content:', content)
content.forEach(time => { 
    
    console.log(ms(parseInt(time),{long: true}))
})
 
    
}

