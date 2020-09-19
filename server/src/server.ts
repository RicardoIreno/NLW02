import express from 'express'
import cors from 'cors'
import routes from './routes'


const app = express()
app.use(express.json()) // por padrão, o Express não entende JSON
app.use(cors())
app.use(routes)
app.listen(3333)


