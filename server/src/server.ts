import express from 'express'
import cors from 'cors'
// import routes from './routes'


const app = express()
app.use(express.json()) // por padrão, o Express não entende JSON
app.use(cors())
// app.use(routes)

app.get('/users', (request, response) => {
  return response.json([{messge: 'Hello World!'}])
})

app.listen(3333)


