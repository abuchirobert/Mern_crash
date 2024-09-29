
import dotenv from 'dotenv'
import express from 'express'
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js"

dotenv.config();
const app = express();
app.use(express.json()) //json middleware
app.use('/api/products/', productRoutes)



const PORT = process.env.PORT || 5000


app.listen(PORT, () =>{
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`)
})


//aOLf4w6xicd0B0ts
//abuchiahamefula2019
//mongodb+srv://abuchiahamefula2019:aOLf4w6xicd0B0ts@clustermern.2nucz.mongodb.net/?retryWrites=true&w=majority&appName=clustermern