import data from "./dataset";
import {randomUUID} from "crypto";
const Resolvers = {
    Query: {
        getAllThemes: () => data.themes,
        getTheme: (_: any, args: { id: string}) => {
            return data.themes.find((theme) => theme.id === args.id);
        },
        getAllMeals: () => data.meals,
        getMeal: (_: any, args: { id: string}) => {
            return data.meals.find((meal) => meal.id === args.id);
        },
        getMealsForTheme: (_: any, args: { themeId: string}) => {
            return data.meals.find((meal) => meal.themeId === args.themeId)
        }
    },
    Mutation: {
        addTheme: (_: any, args: { name: string }) => {
            const newTheme = {
                id: randomUUID(),
                name: args.name
            }
            data.themes.push(newTheme)
            return newTheme;
        },
        addMeal: (_: any, args: { themeId: string, name: string, notes?: string}) => {
            // TODO validate that themeId exists
            const newMeal = {
                id: randomUUID(),
                themeId: args.themeId,
                name: args.name,
                notes: args.notes
            }
            data.meals.push(newMeal)
            return newMeal
        }
    }
};
export default Resolvers;