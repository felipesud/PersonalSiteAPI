import mongoose from 'mongoose';

const AboutSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    description: { type: [String], required: true }
});

const About = mongoose.model('About', AboutSchema);

export default About;
