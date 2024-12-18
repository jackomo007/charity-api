# Charity API - GraphQL Server

This project is a simple GraphQL API built using Apollo Server and Express. The API manages donations and metrics for a charity organization.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [API Structure](#api-structure)
5. [Queries and Mutations](#queries-and-mutations)
6. [Directory Structure](#directory-structure)
7. [License](#license)

---

## Project Overview

The Charity API allows users to:

- **Query donations**: Retrieve a list of donation records.
- **Query metrics**: View charity metrics such as "Lives Impacted" and "Projects Funded."
- **Add donations**: Add new donations via GraphQL mutations.

This project follows **Clean Architecture principles**, which ensure a clean separation of concerns.

---

## Technologies Used

- **Node.js** (v18+)
- **TypeScript**
- **Apollo Server** (GraphQL)
- **Express.js**
- **Clean Architecture Principles**

---

## Getting Started

Follow these steps to set up and run the API locally:

### Prerequisites

- Node.js (v18+)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/charity-api.git
   cd charity-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm run start
   ```

4. Open the GraphQL Playground at:
   ```
   http://localhost:4000/graphql
   ```

---

## API Structure

The API exposes the following endpoints:

- **Query:**

  - `donations`: Retrieve all donations.
  - `metrics`: Retrieve charity metrics.

- **Mutation:**
  - `addDonation`: Add a new donation record.

---

## Queries and Mutations

### Query Donations

```graphql
query {
  donations {
    id
    month
    amount
    donorName
    category
  }
}
```

### Query Metrics

```graphql
query {
  metrics {
    label
    type
    value
  }
}
```

### Add Donation

```graphql
mutation {
  addDonation(
    amount: 5000
    donorName: "John Doe"
    month: "Jan"
    category: "education"
  ) {
    id
    amount
    donorName
    month
    category
  }
}
```

---

## Directory Structure

```
src/
├── application/          # Business logic and use cases
├── domain/               # Entities and business rules
│   └── Metric.ts
├── infrastructure/       # GraphQL setup and server config
│   ├── graphql/
│   │   ├── resolvers.ts  # GraphQL resolvers
│   │   └── schema.ts     # GraphQL schema
│   └── server/
│       └── index.ts      # Apollo Server initialization
├── interfaceAdapters/    # Repositories and controllers
└── shared/               # Shared types and utilities
```

---

## AWS API Prod

[EC2](http://ec2-3-89-31-172.compute-1.amazonaws.com:4000/graphql)

---

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Author

**Your Name**  
[Angel Prieto](https://github.com/jackomo007)
