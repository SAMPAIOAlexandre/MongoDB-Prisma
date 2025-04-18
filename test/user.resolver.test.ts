import { resolvers } from "../graphql/resolvers";
import * as prismaPkg from "@prisma/client";

// ici on simule le client Prisma
jest.mock("@prisma/client", () => {
  const actual = jest.requireActual("@prisma/client");
  return {
    ...actual,
    PrismaClient: jest.fn().mockImplementation(() => ({
      user: {
        findMany: jest.fn().mockResolvedValue([
          { id: "1", name: "Alex", email: "alex@gmail.com" },
          { id: "2", name: "Claire", email: "claire@gmail.com" },
        ]),
      },
    })),
  };
});

// on décrit ici le résultat attentu
describe("Query.users resolver", () => {
  it("should return a list of users", async () => {
    const users = await resolvers.Query.users();
    expect(users).toHaveLength(2);
    expect(users[0]).toHaveProperty("name", "Alex");
    expect(users[1]).toHaveProperty("email", "claire@gmail.com");
  });
});
