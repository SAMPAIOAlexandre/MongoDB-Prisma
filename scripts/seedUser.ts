// this files is only for testing purposes
import { PrismaClient } from "@prisma/client";

export async function seedUser(prisma: PrismaClient) {
  const users = [
    { name: "Alex", email: "alex@gmail.com" },
    { name: "Claire", email: "claire@gmail.com" },
    { name: "Jordan", email: "jordan@gmail.com" },
    // { name: 123, email: "123@gmail.com" }, // just for testing with invalid name
  ];

  for (const user of users) {
    const existing = await prisma.user.findUnique({
      where: { email: user.email },
    });

    if (existing) {
      console.log(`⚠️ User "${user.name}" already exists. Skipping.`);
    } else {
      const created = await prisma.user.create({ data: user });
      console.log(`✅ User "${created.name}" seeded.`);
    }
  }
}
