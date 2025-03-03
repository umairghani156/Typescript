import mongoose from "mongoose";
import Product from "../models/Product.js";

export const addProductController = async (req, res) => {
    const { productName, description, price, image } = req.body
    try {

        if (!productName || !description || !price || !image) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const existingProduct = await Product.findOne({ productName });
        if (existingProduct) {
            return res.status(400).json({
                success: false,
                message: "Product already exists"
            })
        }


        const product = new Product({
            productName: productName.trim().replace(/\s+/g, ' '),
            price,
            image,
            description
        })
        const savedProduct = await product.save();
        if (!savedProduct) {
            return res.status(400).json({
                success: false,
                message: "Product not created"
            })
        }
        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: savedProduct
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        })
    }
};

export const getAllProductsController = async (req, res) => {
    const { page, limit } = req.query
    try {
        const products = await Product.find().limit(limit * 1).skip((page - 1) * limit).exec();
        if (!products) {
            return res.status(400).json({
                success: false,
                message: "Products not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: products
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        })
    }
};

export const getProductController = async (req, res) => {
    const { id } = req.params
    try {
        if (!mongoose.Types.ObjectId.isValid(id) || !id) {
            return res.status(400).json({
                status: false,
                message: "Product Id is not valid or not found"
            })
        };
        const product = await Product.findById(new mongoose.Types.ObjectId(id));
        if (!product) {
            return res.status(400).json({
                status: false,
                message: "Product not found"
            })
        };
        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            data: product
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        })
    }
};


export const updateProductController = async (req, res) => {
    const { id } = req.params
    const { productName, price, image, description } = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(id) || !id) {
            return res.status(400).json({
                status: false,
                message: "Product Id is not valid or not found"
            })
        };

        const product = await Product.findById(new mongoose.Types.ObjectId(id));
        if (!product) {
            return res.status(403).json({
                success: false,
                message: "Product not found in database"
            })
        }

        const updateProduct = await Product.findOneAndUpdate(new mongoose.Types.ObjectId(id), {
            productName,
            price,
            image,
            description
        },
            {
                new: true
            })
       
       if(!updateProduct){
         return res.status(404).json({
         success: false,
         message:"Error in updating Product"
         })
       }

       return res.status(200).json({
        success: true,
        message:"Product updated Successfully",
        data: updateProduct
       })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message:"Internal error occurred"
        })
    }
};

export const deleteProductController =async (req, res) => {
    const {id} = req.params;
    try {
        if(mongoose.Types.ObjectId(id) || !id){
            return res.status(400).json({
                status: false,
                message: "Product Id is  inValid or not found"
            })
        };

        const product = await Product.findById(new mongoose.Types.ObjectId(id));
        if(!product){
            return res.status(403).json({
                success: false,
                message:"Product not found in database"
            })
        }

        const deleteProduct = await Product.findByIdAndDelete(new mongoose.Types.ObjectId(id));
        if(!deleteProduct){
            return res.status(403).json({
                success: false,
                message: "Pro"
            })
        }

    } catch (error) {
        
    }
};