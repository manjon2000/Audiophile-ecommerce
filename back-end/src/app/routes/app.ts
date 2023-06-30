import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { router }  from './web.routes'

const app = express()

app.use(morgan('dev'))
app.use(cors())

app.use(router)

export default app