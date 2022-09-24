const makeApp = require('./index')
const deployDatabaseImplementation = require('./server.randomdb.function')

const configs = require('./server/config/configs')
configs.forEach(config => eval(config))

const currentDB = deployDatabaseImplementation
const app = makeApp(currentDB())

app.listen( 9991, ()=> console.log("YOU ARE NOW LISTENING ON PORT 9991"))