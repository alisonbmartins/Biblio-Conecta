import prisma from "@prisma/client";
const { PrismaClient } = prisma;
const db = new PrismaClient();

export default {
    async create(req, res) {
        const { bookId } = req.body;
        const copy = await db.copy.create({
            data: { bookId: Number(bookId) }
        });
        res.json(copy);
    },

    async list(req, res) {
        const copies = await db.copy.findMany({
            include: { book: true }
        });
        res.json(copies);
    }
};
