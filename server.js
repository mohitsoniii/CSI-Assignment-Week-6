import express from 'express'
import productRoutes from './routes/productRoutes.js'

const app = express();

app.use(express.json());
app.use('/products', productRoutes);

app.get('/',(req, res)=>{
    res.send('Hello, I am running...')
})

app.listen(3000, ()=>{
    console.log("Server is running...");
})