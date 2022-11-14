import { model, models, Schema } from "mongoose";

const ProductSchema = new Schema({
    name: String,
    price: String,
    category: String,
    image: String
});

const Product = models?.Product || model('Product', ProductSchema)

export default Product;