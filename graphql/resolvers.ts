import { PrismaClient } from "@prisma/client";
//import { User, Post } from "@prisma/client";

const prisma = new PrismaClient();

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
    posts: (parent) => {
      return prisma.post.findMany({
        where: {
          authorId: parent.id,
        },
      });
    },
  },
  Post: {
    author: (parent) => {
      return prisma.user.findUnique({
        where: {
          id: parent.authorId,
        },
      });
    },
  },
};
