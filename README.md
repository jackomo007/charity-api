# Charity API - GraphQL Server

This project is a simple GraphQL API built using Apollo Server and Express. The API manages donations and metrics for a charity organization.

---

## Table of Contents

- [Charity API - GraphQL Server](#charity-api---graphql-server)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [API Structure](#api-structure)
  - [Queries and Mutations](#queries-and-mutations)
    - [Query Donations](#query-donations)
    - [Query Metrics](#query-metrics)
    - [Add Donation](#add-donation)
  - [Directory Structure](#directory-structure)
  - [Example Endpoints](#example-endpoints)
  - [License](#license)
  - [Author](#author)

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
   npm run dev
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

## Example Endpoints

- **Get Data:**

```
curl --request POST \
  --url https://charity-8ba6095og-angels-projects-1a4dcd1f.vercel.app/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"query Query { metrics { label type value } donations { amount category donorName id month } }"}'
```
---

- **Create Data:**

```
curl --request POST \
  --url https://charity-8ba6095og-angels-projects-1a4dcd1f.vercel.app/graphql \
  --header 'Content-Type: application/json' \
  --data '{
    "query": "mutation AddDonation($amount: Float!, $donorName: String!, $month: String!, $category: String!) { addDonation(amount: $amount, donorName: $donorName, month: $month, category: $category) { id amount donorName month category } }",
    "variables": {
      "amount": 10000,
      "donorName": "John Doe",
      "month": "March",
      "category": "Education"
    }
  }'
```
---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Author

**Your Name**  
[Angel Prieto](https://github.com/jackomo007)
