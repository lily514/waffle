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
  type Weekday {
    id: ID!
    name: String
  }
  type WeekdayPlan {
    id: ID
    weekday: Weekday
    theme: Theme
    meal: Meal
  }
  type Query {
    getAllThemes: [Theme]
    getTheme(id: ID!): Theme
    getAllMeals: [Meal]
    getMealsForTheme(themeId: ID!): [Meal]
    getMeal(id: ID!): Meal
    getAllThemesAndMeals: ThemesAndMeals
    getWeekdayPlan: [WeekdayPlan]
  }
  type Mutation {
    addTheme(name: String): Theme
    deleteTheme(id: ID): Theme
    addMeal(themeId: ID!, name: String!, notes: String): Meal
    deleteMeal(id: ID): Meal
    addWeekdayPlan(weekdayId: ID!, themeId: ID!, mealId: ID): WeekdayPlan
    addMealToWeekdayPlan(id: ID, mealId: ID): WeekdayPlan
    addThemeToWeekdayPlan(id: ID, themeId: ID): WeekdayPlan
  }
`;
export default Schema; 