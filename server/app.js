import dotenv from 'dotenv'
import  express  from 'express'
import cors from 'cors'

dotenv.config()
app.use(cors())
const app = express()
const port = process.env.port

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
})


