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
  type ThemesAndMeals {
    themes: [Theme]
    meals: [Meal]
  }
  type Query {
    getAllThemes: [Theme]
    getTheme(id: ID!): Theme
    getAllMeals: [Meal]
    getMealsForTheme(themeId: ID!): [Meal]
    getMeal(id: ID!): Meal
    getAllThemesAndMeals: ThemesAndMeals
  }
  type Mutation {
    addTheme(name: String): Theme
    deleteTheme(id: ID): Theme
    addMeal(themeId: ID!, name: String!, notes: String): Meal
  }
`;
export default Schema; 