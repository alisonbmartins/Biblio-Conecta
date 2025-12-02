import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../src/utils/hash.js";

const db = new PrismaClient();

async function run() {
    await db.user.create({
        data: {
            name: "Administrador",
            email: "admin@admin.com",
            password: hashPassword("123456"),
            role: "admin"
        }
    });

    console.log("Usuário admin criado.");
}

run()
  .catch(console.error)
  .finally(() => db.$disconnect());
