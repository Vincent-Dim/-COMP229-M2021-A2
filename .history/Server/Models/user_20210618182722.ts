import { detectOverflow } from '@popperjs/core';
import mongoose from 'mongoose';
const Schema = mongoose.Schema; // Schema alias

const UserSchema = new Schema
({
    username: String,
    emailAddress: String,
    displayName: String,
    created:
    {
        type: Date,
        default: Date.now()
    }
},
{
    collection: "contact"
});

const Model = mongoose.model("contact", UserSchema);
export default Model;