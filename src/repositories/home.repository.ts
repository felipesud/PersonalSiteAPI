import mongoose from 'mongoose';
import { IHome } from 'src/interfaces/IHome';
import Home from 'src/models/Home';

async function getHome(_id: string): Promise<IHome | null> {
    return Home.findById(_id).exec();
}

async function getHomes(): Promise<IHome[]> {
    return Home.find({}).exec();
}

async function addHome(home: Home): Promise<IHome> {
    const newHome = new Home(home);
    return newHome.save();
}

async function updateHome(_id: string, newHome: Home): Promise<IHome | null> {
    return Home.findByIdAndUpdate(_id, newHome, { new: true }).exec();
}

async function deleteHome(_id: string): Promise<IHome | null> {
    return Home.findByIdAndDelete(_id).exec();
}

export default {
    getHome,
    getHomes,
    deleteHome,
    addHome,
    updateHome
}
