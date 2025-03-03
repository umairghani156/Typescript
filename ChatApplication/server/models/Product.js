import { Schema, model } from "mongoose";

const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Product = model('Product', productSchema);

export default Product;