import Product from "../models/product.model.js"
import mongoose from "mongoose"

export const getSingleProduct = async (req, res) =>{
 
    try {
        const id = req.params.id
        const product = await Product.findById(id)
        if(!id){
        res.status(404).json({
            success:false,
            message: "Product not found",
        })
    }
    res.json(product)

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Wrong ID, product cannot be found"
        })
        
    }
}

export const getProducts = async(req, res) =>{
  
        try {
            const products = await Product.find({})
            //console.log(products)
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

}

export const createProduct = async(req, res) =>{
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
}

export const deleteProduct = async(req, res) =>{
    const {id} = req.params
    //console.log('ID:', id)

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
}

export const updateProduct = async(req, res) =>{
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
}