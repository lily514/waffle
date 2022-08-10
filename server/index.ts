import http from "http";
import {ApolloServer} from "apollo-server-express";
import {ApolloServerPluginDrainHttpServer} from "apollo-server-core";
import Schema from "./Schema";
import Resolvers from "./Resolvers";

const express = require("express");
const PORT = process.env.PORT || 3004;
const path = require('path')

async function startApolloServer(schema: any, resolvers: any) {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs: schema,
        resolvers,
        //tell Express to attach GraphQL functionality to the server
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    }) as any;
    await server.start(); //start the GraphQL server.
    server.applyMiddleware({ app });
    await new Promise<void>((resolve) =>
        httpServer.listen({ port: PORT }, resolve) //run the server on port 4000
    );
    console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);

    // Have Node serve the files for built React app
    app.use(express.static(path.resolve(__dirname, '../client/build')));
}
//in the end, run the server and pass in our Schema and Resolver.
startApolloServer(Schema, Resolvers);
