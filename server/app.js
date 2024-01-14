import dotenv from 'dotenv'
import  express  from 'express'


dotenv.config()
const app = express()
const port = process.env.port

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
})


