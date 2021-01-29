import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

const port = 3000;
app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('', (req, res) => {
    res.send('Hello World!')
  });
app.post('', (req,res) => {
  console.log(req.body)
  res.send({message: 'hello'})
});
  
  export const start = () => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    }) 
  }
