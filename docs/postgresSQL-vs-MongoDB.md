# PostgreSQL vs MongoDB

> Comparaison entre une base **relationnelle (SQL)** comme PostgreSQL et une base **non relationnelle (NoSQL)** comme MongoDB.

En NoSQL on ne parle plus de table mais de collection, les lignes deviennent des **documents JSON**.

---

## 🧠 Philosophie de base

|              | PostgreSQL (SQL)       | MongoDB (NoSQL)                   |
| ------------ | ---------------------- | --------------------------------- |
| Type de base | Relationnelle          | Document-oriented                 |
| Stockage     | Tables et lignes       | Collections et documents JSON     |
| Schéma       | Strict (schéma défini) | Flexible (schéma libre)           |
| Relations    | Foreign keys, JOIN     | Références ou documents imbriqués |
| Structure    | Colonnes définies      | Objets dynamiques                 |

---

## 📦 Exemples de structure

### PostgreSQL

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title TEXT,
  user_id INTEGER REFERENCES users(id)
);
```

### MongoDB (via Prisma )

```
// User
{
  _id: ObjectId("..."),
  name: "Alex",
  email: "alex@gmail.com"
}

// Post
{
  _id: ObjectId("..."),
  title: "Mon premier post",
  authorId: ObjectId("...") // référence à l'utilisateur
}
```
