import mongoose from "mongoose";
import { app } from '../index.js';

const connectDB = async () => {
    try {
        const connect = mongoose.connect(`${process.env.MONGOURI}/${process.env.DBANME}`);
        connect.then(() => {
            console.log(`DB Connected`);
            app.listen(process.env.PORT || 7000, () => { console.log(`server start`); })
        }).catch((error) => {
            console.log(`Fiald to connect DB`, error);
        })
    } catch (error) {
        console.log("Faild to connect DB");
    }
}

export default connectDB;