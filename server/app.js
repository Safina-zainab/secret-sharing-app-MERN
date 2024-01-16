import dotenv from 'dotenv'
import  express  from 'express'
import cors from 'cors'
import connectDB from './config/connectdb.js'
import userRouter from './routes/userRouter.js'
import postRouter from './routes/postRouter.js'

const app = express()
dotenv.config()
app.use(cors())

const port = process.env.port
const DATABASE_URL = process.env.DATABASE_URL

// connection
connectDB(DATABASE_URL)

// json
app.use(express.json())

app.use("/api/user", userRouter)
app.use("/api", postRouter)

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
})



