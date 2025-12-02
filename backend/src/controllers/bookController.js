import prisma from "@prisma/client";
const { PrismaClient } = prisma;
const db = new PrismaClient();

export default {
    async list(req, res) {
        const books = await db.book.findMany({
            include: { copies: true }
        });
        res.json(books);
    },

    async create(req, res) {
        const { title, author, category, year, description } = req.body;
        const book = await db.book.create({
            data: { title, author, category, year, description }
        });
        res.json(book);
    },

    async update(req, res) {
        const { id } = req.params;
        const data = req.body;

        const book = await db.book.update({
            where: { id: Number(id) },
            data
        });

        res.json(book);
    },

    async delete(req, res) {
        const { id } = req.params;

        await db.book.delete({ where: { id: Number(id) } });

        res.json({ message: "Livro removido" });
    }
};
