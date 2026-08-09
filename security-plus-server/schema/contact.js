import mongoose, { Mongoose } from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        default: "none"
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const Contacts = new mongoose.model("contacts", contactSchema);

export default Contacts
