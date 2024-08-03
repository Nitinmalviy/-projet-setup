import { Router } from "express";
import { signup } from "../controller/user.controller.js";

const user = Router();

user.post('/signup', signup)

export default user;