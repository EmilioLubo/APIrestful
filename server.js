import Express from 'express'
import router from './Modules/routes.js'
const app = Express()

app.use(Express.json())
app.use(Express.urlencoded({extended:true}))

app.use(Express.static('./Public'))

const PORT = 8080

app.get('/', (req, res) =>{
    res.status(200).send('API Productos')
})

app.use('/productos', router)

app.listen(PORT, err => {
    err ? console.log(err) :
    console.log(`listening on port ${PORT}`)
})