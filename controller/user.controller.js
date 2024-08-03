import User from "../model/user.model.js";
import { hashPassword } from "../utils/encyption.js";

export const signup = async (req, res) => {
    try {
        // destructer object
        const { firsName, lastName, email, password, contact } = req.body;

        console.log("Data", "firsName", firsName, "lastName", lastName, "email", email, "password", password, "password", contact);
        // get user ip from header

        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
        // encoding user password
        console.log("Ip : ", ip);
        const hashedPassword = await hashPassword(password);
        // create user
        const user = await User.create({ firsName, lastName, email, password: hashedPassword, ipAddress: ip, contact });

        res.status(201).json({ message: "User Created successfully" })

    } catch (error) {
        res.status(500).json({ error: "internam server error" })
    }

} 