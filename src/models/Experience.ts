import mongoose from 'mongoose';

const ExperienceIntroSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text1: { type: String, required: true },
    linkUrl: { type: String, required: true },
    linkText1: { type: String, required: true },
    text2: { type: String, required: true },
    linkUrl2: { type: String, required: true },
    linkText2: { type: String, required: true },
    text3: { type: String, required: true },
    linkUrl3: { type: String, required: true },
    linkText3: { type: String, required: true },
    text4: { type: String, required: true },
});


const ExperienceSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    position: { type: String, required: true },
    period: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: [String], required: true }
});

const Experience = mongoose.model('Experience', ExperienceSchema);
const ExperienceIntro = mongoose.model('ExperienceIntro', ExperienceIntroSchema);

export default { Experience, ExperienceIntro };
