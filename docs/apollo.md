### 1. Qu’est-ce qu’Apollo Server ?

Apollo Server est un framework qui permet de :

Créer une API GraphQL côté backend

Exposer des types, requêtes et mutations

Se brancher facilement à une base de données (via Prisma, Mongoose, etc.)

Apollo = Middleware GraphQL + Runtime

### 2. Structure

```
src/
├── index.ts              # Point d’entrée (serveur Apollo)
├── graphql/
│   ├── schema.ts         # Types GraphQL (typeDefs)
│   └── resolvers.ts      # Résolveurs (fonctions qui récupèrent les données)
```

### 3. Schéma

```
type User {
  id: String!
  name: String!
  email: String!
  posts: [Post!]!
}

type Post {
  id: String!
  title: String!
  content: String
  published: Boolean!
  author: User!
}

type Query {
  users: [User!]!
  posts: [Post!]!
}
```

Ici on définit deux types : User et Post
Une relation 1:N entre User et Post
Deux query : la listes des utilisateurs et des articles

### 4.Resolver

```
export const resolvers = {
  Query: {
    users: async () => prisma.user.findMany(),
    posts: async () => prisma.post.findMany(),
  },
  User: {
    posts: (parent: prismaPkg.User) =>
      prisma.post.findMany({ where: { authorId: parent.id } }),
  },
  Post: {
    author: (parent: prismaPkg.Post) =>
      prisma.user.findUnique({ where: { id: parent.authorId } }),
  },
};
```

Les resolver implémentent la logique des queries

Connectent les relations

Dans notre projet s'appuie sur Prisma pour interagir avec MongoDB
