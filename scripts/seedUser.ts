// this files is only for testing purposes

import { PrismaClient } from "@prisma/client";

export async function seedUser(prisma: PrismaClient) {
  const user = await prisma.user.create({
    data: {
      name: "Alex",
      email: "alex@gmail.com",
    },
  });

  console.log("✅ User seeded:", user);
}
