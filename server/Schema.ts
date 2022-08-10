import { gql } from "apollo-server-express";
const Schema = gql`
  type Theme {
    id: ID!
    name: String
  }
  type Meal {
    id: ID!
    themeId: ID!
    name: String!
    notes: String
  }
  type Query {
    getAllThemes: [Theme]
    getTheme(id: ID!): Theme
    getAllMeals: [Meal]
    getMealsForTheme(themeId: ID!): [Meal]
    getMeal(id: ID!): Meal
  }
  type Mutation {
    addTheme(name: String): Theme
    addMeal(themeId: ID!, name: String!, notes: String): Meal
  }
`;
export default Schema; 