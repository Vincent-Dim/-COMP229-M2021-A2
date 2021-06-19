import mongoose from 'mongoose';
const Schema = mongoose.Schema; // Schema alias

const contactSchema = new Schema
({
    username: String,
    phone: String,
    email: String,
    city: String,
    profession: String,
    age: Number
},
{
    collection: "contact"
});

const Model = mongoose.model("contact", contactSchema);
export default Model;