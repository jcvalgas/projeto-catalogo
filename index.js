import express from 'express'
import  path  from 'path'
import {routes} from './src/routes/routes.js'

const port = process.env.port || 3002
const app = express()
const __dirname = path.resolve(path.dirname(''))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, 'public')))

app.use(routes)
app.listen(port, (req, res) => {
    console.log(`Estou rodando na porta ${port}`)
})

