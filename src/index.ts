import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

const server = app.listen('3000',()=>{})

export { server}
