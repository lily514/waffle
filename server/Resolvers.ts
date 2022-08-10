import data from "./dataset";
import {randomUUID} from "crypto";
const Resolvers = {
    Query: {
        getAllThemes: () => data.themes,
        getTheme: (_: any, args: any) => {
            console.log(args);
            return data.themes.find((theme) => theme.id === args.id);
        },
    },
    Mutation: {
        addTheme: (_: any, args: any) => {
            const newTheme = {
                id: randomUUID(),
                name: args.name
            }
            data.themes.push(newTheme)
            return newTheme;
        }
    }
};
export default Resolvers;