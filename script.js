const express =require('express');

const path=require('path')
// const router=express.Router()

const app=express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))

const userRoutes=require('./routes/add-user.js')

app.set('view engine','ejs')
app.set('views','views');

app.use(userRoutes)

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not Found</h1>')
  })

  

app.listen(4000);