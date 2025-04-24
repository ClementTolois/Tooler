# Tooler

Tooler is a [NestJS](https://nestjs.com/) project designed as a playground to explore modern backend concepts and tools. It focuses on clean architecture, developer experience, and scalable practices.

This project integrates technologies and methodologies such as:

- ✅ **NestJS** — Modular, testable Node.js framework
- ✅ **Drizzle ORM** — Lightweight, type-safe SQL ORM
- ✅ **Auth0** — Authentication and authorization
- ✅ **Neverthrow** — Safer error handling with functional programming principles
- ✅ **Domain-Driven Design (DDD)** — Clean architecture & business logic boundaries
- ✅ ...and more

---

## 🛠 Setup

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [Docker](https://www.docker.com/)
- [Yarn](https://yarnpkg.com/) (Package manager)

---

### 🔐 Environment Variables

Create a `.env` file at the root of the project with the following content:

```bash
# Database
DATABASE_URL="postgresql://POSTGRES_USER:POSTGRES_PASSWORD@localhost:5432/POSTGRES_DB"
POSTGRES_USER="POSTGRES_USER"
POSTGRES_PASSWORD="POSTGRES_PASSWORD"
POSTGRES_DB="POSTGRES_DB"

# Auth0
AUTH0_ISSUER_URL=https://your-tenant.auth0.com/
AUTH0_AUDIENCE=https://your-api-identifier
```

    💡 Replace Auth0 values with your actual credentials from the Auth0 dashboard.

🐘 Database

Tooler uses a PostgreSQL database running in Docker. Start it using:

```bash
docker compose up -d
```

This will start a PostgreSQL container with the database name `todoDb` and the admin credentials `admin` and `admin123`.

Run the following command to initialize the database:

```bash
yarn db:push
```

This will create the tables in the database and add the necessary columns using Drizzle kit.

Finally, you can use `yarn db:studio` to open the Drizzle studio and explore the database.

---

## 🚀 Running the project

```bash
yarn start:dev
```

This will start the NestJS application in development mode.
