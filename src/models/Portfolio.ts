import mongoose from 'mongoose';

const PortfolioIntroSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text: { type: String, required: true },
});


const PortfolioSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    year: { type: String, required: true },
    projectName: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    stack: { type: [String], required: true }
});

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);
const PortfolioIntro = mongoose.model('PortfolioIntro', PortfolioIntroSchema);

export default { Portfolio, PortfolioIntro };
