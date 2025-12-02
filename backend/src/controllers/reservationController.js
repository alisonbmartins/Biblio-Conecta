import prisma from "@prisma/client";
const { PrismaClient } = prisma;
const db = new PrismaClient();

export default {
    async reserve(req, res) {
        const { userId, bookId } = req.body;

        const reservation = await db.reservation.create({
            data: { userId, bookId }
        });

        res.json(reservation);
    },

    async list(req, res) {
        const reservations = await db.reservation.findMany({
            include: { user: true, book: true }
        });
        res.json(reservations);
    }
};
