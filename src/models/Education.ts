import mongoose from 'mongoose';

const EducationIntroSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text1: { type: String, required: true },
    linkUrl: { type: String, required: true },
    linkText: { type: String, required: true },
    text2: { type: String, required: true }
});


const EducationSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    university: { type: String, required: true },
    degree: { type: String, required: true },
    period: { type: String, required: true },
    url: { type: String, required: true }
});

const Education = mongoose.model('Education', EducationSchema);
const EducationIntro = mongoose.model('EducationIntro', EducationIntroSchema);

export default { Education, EducationIntro };
