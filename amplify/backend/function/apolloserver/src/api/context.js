"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = exports.prisma = void 0;
var client_1 = require("@prisma/client");
exports.prisma = new client_1.PrismaClient();
var createContext = function () {
    return {
        prisma: exports.prisma,
    };
};
exports.createContext = createContext;
