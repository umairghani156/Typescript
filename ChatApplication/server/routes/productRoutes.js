import express from "express";
import { addProductController, getAllProductsController, getProductController, updateProductController } from "../controllers/productController.js";
import { validateToken } from "../config/Token.js";

const productRouter = express.Router();

//Add product
productRouter.post("/",validateToken, addProductController);

//Get all products
productRouter.get("/get-all", getAllProductsController);

//Get Products
productRouter.get("/:id", getProductController);

//Update Product
productRouter.put("/:id",validateToken, updateProductController);

//Delete Product
productRouter.delete("/:id",validateToken, updateProductController);



export default productRouter;