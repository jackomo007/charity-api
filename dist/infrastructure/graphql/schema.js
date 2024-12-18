"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
  type Donation {
    id: ID!
    amount: Float!
    donorName: String!
    month: String!
    category: String!
  }

  type Metric {
    label: String!
    type: Int!
    value: Float!
  }

  type Query {
    donations: [Donation!]!
    metrics: [Metric!]!
  }

  type Mutation {
    addDonation(
      amount: Float!
      donorName: String!
      month: String!
      category: String!
    ): Donation!
  }
`;
