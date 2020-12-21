"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
var apollo_server_lambda_1 = require("apollo-server-lambda");
var typeDefs = apollo_server_lambda_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    hello: String\n  }\n"], ["\n  type Query {\n    hello: String\n  }\n"])));
var resolvers = {
    Query: {
        hello: function () { return "hello from lambda"; },
    },
};
var server = new apollo_server_lambda_1.ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    context: function (_a) {
        var event = _a.event, context = _a.context;
        return ({
            headers: event.headers,
            functionName: context.functionName,
            event: event,
            context: context,
        });
    },
    introspection: true,
});
exports.handler = server.createHandler({
    cors: {
        origin: "*",
        credentials: true,
    },
});
var templateObject_1;
