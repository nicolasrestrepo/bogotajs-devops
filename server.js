const { createServer } = require('http')
const app = require('./app')

const server = createServer(app)
if(!module.parent){
    server.listen(3000, () => {
        console.log('runing in port 3000')
    })
}

module.exports = server


