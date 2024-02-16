import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))


// for data from json formats
app.use(express.json({limit:"16kb"}))
// for data from urls
app.use(express.urlencoded({extended: true,limit:"16kb"}))
// for images, videos etc
app.use(express.static("public"))
// for cookies
app.use(cookieParser())

export {app}
