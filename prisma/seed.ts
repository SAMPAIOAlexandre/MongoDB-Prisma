// this files is the orchestrator of the scripts files

import { PrismaClient } from "@prisma/client";
import { seedUser } from "../scripts/seedUser.ts";
import { seedPost } from "../scripts/seedPost.ts";

const prisma = new PrismaClient();

async function main() {
  await seedUser(prisma);
  await seedPost(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("✅ All seeds executed");
  })
  .catch(async (e) => {
    console.error("❌ Error:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
