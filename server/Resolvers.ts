import data from "./dataset";
const Resolvers = {
    Query: {
        getAllThemes: () => data.themes,
        getTheme: (_: any, args: any) => {
            console.log(args);
            return data.themes.find((theme) => theme.id === args.id);
        },
    },
};
export default Resolvers;