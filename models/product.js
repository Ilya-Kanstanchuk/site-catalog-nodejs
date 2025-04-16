import mongoose, { trusted } from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    price:{
        type: String,
        require: true
    },
    body: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    }
}, {timestamps: true});

export const Product = mongoose.model("products", productSchema);