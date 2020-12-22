"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = exports.prisma = void 0;
var client_1 = require("@prisma/client");
var jsonwebtoken_1 = require("jsonwebtoken");
var getUserWithToken = function (tokenWithBearer) {
    var token = tokenWithBearer === null || tokenWithBearer === void 0 ? void 0 : tokenWithBearer.split(' ')[1];
    try {
        if (token) {
            return jsonwebtoken_1.verify(token, '123456789');
        }
        return null;
    }
    catch (err) {
        return null;
    }
};
exports.prisma = new client_1.PrismaClient();
var createContext = function (ctx, headers) {
    var user = getUserWithToken(headers.authorization);
    return {
        prisma: exports.prisma,
        user: user,
    };
};
exports.createContext = createContext;
