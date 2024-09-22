
import dotenv from 'dotenv'
import express from 'express'
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';
import mongoose from 'mongoose';


dotenv.config();
const app = express();
app.use(express.json()) //json middleware

//api for getting all products
app.get("/api/products", async(req, res) =>{

    try {
        const products = await Product.find({})
        res.status(200).json({
            success: true,
            data: products
        })
    } catch (error) {
        console.log("Error in fechting error", error.message)
        res.status(500).json({
            success:false,
            message: "Server Error"
        })
    }
})


//api to create new product
app.post("/api/products", async(req, res) =>{
    const product = req.body;
    if (!product.name || !product.price || !product.image){
        return res.status(400).json({
            success: false,
            message: "Please provide all fields"
        })
    }

    const newProduct = new Product(product)
    try {
        await newProduct.save()
        res.status(201).json({
            success: true,
            data: newProduct
        })
        
    } catch (error) {
        console.error("Error in creating product:", error.message)
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
        
    }

})

//delete a product
app.delete('/api/products/:id', async(req, res) =>{
    const {id} = req.params
    console.log('ID:', id)

    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "Product deleted successfully."
        })
    } catch (error) {
        res.status(400).json({
            success: true,
            message: "Wrong ID. Product not found"
        })
        
    }
})

//api for updating product
app.patch('/api/products/:id', async(req, res) =>{
    const {id} = req.params
    const product = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            success:false,
            message: "Invalid product ID"
        })
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true})
        res.status(200).json({
            success: true,
            data: updatedProduct
        })
        
    } catch (error) {
     res.status(500).json(
        {success: false, message: "Server Error"}
     )   
    }
})







const PORT = process.env.PORT


app.listen(PORT, () =>{
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`)
})


//aOLf4w6xicd0B0ts
//abuchiahamefula2019
//mongodb+srv://abuchiahamefula2019:aOLf4w6xicd0B0ts@clustermern.2nucz.mongodb.net/?retryWrites=true&w=majority&appName=clustermern