const jsonServer = require('json-server')

const ctServer = jsonServer.create()

const middleware = jsonServer.defaults()
const router = jsonServer.router('db.json')

ctServer.use(middleware)
ctServer.use(router)

const PORT = 3000 || process.env.PORT

ctServer.listen(PORT,()=>{
    console.log("Server is running at PORT:"+PORT);
    
})