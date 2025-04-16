
import { Product } from "../models/product.js";


const postProduct = async(req, res) =>{
    const newProduct = new Product({
        title: req.body.title,
        snippet: req.body.snippet,
        price: req.body.price,
        body: req.body.body,
        image: {
            data: req.file.buffer,
            contentType: req.file.mimetype
        }
    });
    await newProduct.save();
    res.redirect("/catalog");
};

const getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.render("catalog", { title: "Catalog", products });
};

const findImgById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product?.image?.data) {
      res.set("Content-Type", product.image.contentType);
      res.send(product.image.data);
    } else {
      res.status(404).send("Image not found");
    }
};

const findProductById = async(req, res) =>{
    const product = await Product.findById(req.params.id);
    res.render("details", {title: "Item", product});
};

const deleteProduct = async(req, res) =>{
    await Product.findByIdAndDelete(req.params.id);
    res.json({redirect: "/catalog"});
};

const loadAddPage = async(req, res) =>{
    res.render("add", {title: "Add Product"});
};

export default {
    postProduct,
    getAllProducts,
    findImgById,
    findProductById,
    loadAddPage,
    deleteProduct
}