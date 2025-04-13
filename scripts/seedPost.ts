// this files is only for testing purposes

import { PrismaClient } from "@prisma/client";

export async function seedPost(prisma: PrismaClient) {
  const user = await prisma.user.findFirst();
  if (!user) {
    throw new Error("No user found. Please create a user first.");
  }
  const post = await prisma.post.create({
    data: {
      title: "Premier article",
      content: "J'apprends à utiliser MongoDB avec Prisma",
      published: true,
      author: {
        connect: { id: user.id },
      },
    },
  });

  console.log("✅ Post created:", post);
}
