import express from "express";
import { graphqlHTTP } from "express-graphql";
import * as resolvers from "./resolvers";

import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefs = `
  type Query {
    renters: [Renter!]!    
  }

  type Renter {
    id: ID!
    name: String!
    rentals: [Rental!]!    
  }

  type Rental {
    id: ID!
    renterId: ID!
    vehicleRegistration: String!
  }
`;

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(4000, () => console.log("Now browse to localhost:4000/graphql"));
