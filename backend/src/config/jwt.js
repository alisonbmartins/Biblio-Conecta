import dotenv from "dotenv";

dotenv.config();

export default {
    secret: process.env.JWT_SECRET || "defaultsecret",
    expiresIn: "2d"
};
