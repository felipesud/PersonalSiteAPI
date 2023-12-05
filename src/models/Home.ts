import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
    serviceType: String,
    description: String
});

const HomeSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    intro: String,
    services: [ServiceSchema]
});

const Home = mongoose.model('Home', HomeSchema);

export default Home;
