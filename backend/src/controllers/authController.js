import prisma from "@prisma/client";
import jwt from "jsonwebtoken";
import { hashPassword, comparePassword } from "../utils/hash.js";

const { PrismaClient } = prisma;
const db = new PrismaClient();

export default {
    async register(req, res) {
        const { name, email, password } = req.body;

        try {
            const user = await db.user.create({
                data: {
                    name,
                    email,
                    password: hashPassword(password)
                }
            });
            res.json(user);
        } catch (err) {
            res.status(400).json({ error: "Email já cadastrado." });
        }
    },

    async login(req, res) {
        const { email, password } = req.body;

        const user = await db.user.findUnique({ where: { email } });
        if (!user) return res.status(404).json({ error: "Usuário não encontrado" });

        if (!comparePassword(password, user.password))
            return res.status(401).json({ error: "Senha incorreta" });

        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "2d" }
        );

        res.json({ user, token });
    }
};
