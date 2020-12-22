"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
var apollo_server_lambda_1 = require("apollo-server-lambda");
var schema_1 = require("./api/schema");
var context_1 = require("./api/context");
var server = new apollo_server_lambda_1.ApolloServer({
    schema: schema_1.schema,
    context: function (_a) {
        var event = _a.event, context = _a.context;
        return (__assign({ headers: event.headers, functionName: context.functionName, event: event }, context_1.createContext(context, event.headers)));
    },
    introspection: true,
});
exports.handler = server.createHandler({
    cors: {
        origin: '*',
        credentials: true,
    },
});
