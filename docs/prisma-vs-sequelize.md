# Prisma vs Sequelize

Prisma s'utilise systématiquement avec typescript, c'est un ORM TypeScript-first

Sequelize peut-être utilisé avec type script mais à la base il a été concu en javascript ce n’est pas un ORM TypeScript-first, il n’a pas de génération automatique de types comme Prisma

## 🧱 Déclaration d’un modèle

### Sequelize (JS pur)

```js
// models/user.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  });
};
```

✅ Rapide à écrire

❌ Pas typé

❌ Pas d'autocomplétion

❌ Erreurs non détectées avant exécution

### Prisma (TS native)

model User {
id String @id @default(auto()) @map("\_id") @db.ObjectId
name String
email String @unique
}

✅ Typage automatique via @prisma/client

✅ Erreurs détectées à la compilation

✅ Requêtes simples, lisibles, sécurisées

### 🔁 Exemple de requête

Sequelize (JS) : User.findAll({ where: { email }})

Prisma (TS) : prisma.user.findMany({ where: { email }})
