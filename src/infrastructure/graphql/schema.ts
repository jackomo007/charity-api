import { gql } from "apollo-server-express";

export const typeDefs = gql`
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
