import prisma from "@prisma/client";
const { PrismaClient } = prisma;
const db = new PrismaClient();

export default {
    async loan(req, res) {
        const { userId, copyId } = req.body;

        const copy = await db.copy.findUnique({ where: { id: copyId } });
        if (!copy.available) return res.status(400).json({ error: "Exemplar indisponível" });

        await db.copy.update({
            where: { id: copyId },
            data: { available: false }
        });

        const loan = await db.loan.create({
            data: { userId, copyId }
        });

        res.json(loan);
    },

    async return(req, res) {
        const { id } = req.params;

        const loan = await db.loan.update({
            where: { id: Number(id) },
            data: {
                status: "returned",
                returnDate: new Date()
            }
        });

        await db.copy.update({
            where: { id: loan.copyId },
            data: { available: true }
        });

        res.json(loan);
    },

    async list(req, res) {
        const loans = await db.loan.findMany({
            include: { user: true, copy: true }
        });
        res.json(loans);
    }
};
