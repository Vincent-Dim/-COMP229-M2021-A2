import mongoose from 'mongoose';
const Schema = mongoose.Schema; // Schema alias

const contactSchema = new Schema
({
    name: String,
    brand: String,
    category: String,
    colour: String,
    size: String,
    price: Number
},
{
    collection: "contact"
});

const Model = mongoose.model("contact", contactSchema);
export default Model;