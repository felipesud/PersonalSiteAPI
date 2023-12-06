import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    email: { type: String, required: true },
    linkedin: { type: String, required: true },
    github: { type: String, required: true },
    
});

const Contact = mongoose.model('Contact', ContactSchema);

export default Contact;
