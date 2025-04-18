import * as prismaPkg from "@prisma/client";
const prisma = new prismaPkg.PrismaClient();

export const resolvers = {
  Query: {
    users: async () => {
      return await prisma.user.findMany();
    },
    posts: async () => {
      return await prisma.post.findMany();
    },
  },
  User: {
    posts: (parent: prismaPkg.User) => {
      return prisma.post.findMany({
        where: {
          authorId: parent.id,
        },
      });
    },
  },
  Post: {
    author: (parent: prismaPkg.Post) => {
      return prisma.user.findUnique({
        where: {
          id: parent.authorId,
        },
      });
    },
  },
};
