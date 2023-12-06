import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
    serviceType: { type: String, required: true },
    description: { type: String, required: true }
});

const HomeSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    intro: { type: String, required: true },
    services: { type: [ServiceSchema], required: true }
});

const Home = mongoose.model('Home', HomeSchema);

export default Home;
