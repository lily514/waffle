import { gql } from "apollo-server-express";
const Schema = gql`
  type Theme {
    id: ID!
    name: String
  }
  #handle user commands
  type Query {
    getAllThemes: [Theme] #will return multiple themes
    getTheme(id: String): Theme #has an argument of 'id' of type Integer.
  }
  type Mutation {
    addTheme(name: String): Theme
  }
`;
export default Schema; 