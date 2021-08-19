# super-simple-express-graphql-typescript
Super simple express-graphql with typescript boilerplate example repo


```
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
  ```
  
  Steps:
  
  `npm install`
  
  `npm run start:dev` 
