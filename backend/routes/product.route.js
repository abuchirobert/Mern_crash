import express from 'express'
import mongoose from 'mongoose'
import Product from '../models/product.model.js'
import { createProduct, deleteProduct, getProducts, updateProduct, getSingleProduct } from '../controllers/product.controller.js'

const router = express.Router()


//api to get single product
router.get("/:id", getSingleProduct)

//api for getting all products
router.get("/", getProducts)


//api to create new product
router.post("/", createProduct)

//delete a product
router.delete('/:id', deleteProduct)

//api for updating product
router.patch('/:id', updateProduct)


export default router



