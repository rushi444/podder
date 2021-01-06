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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PodcastTypes = void 0;
var nexus_1 = require("nexus");
var Podcast = nexus_1.objectType({
    name: 'Podcast',
    definition: function (t) {
        t.model.id();
        t.model.name();
        t.model.podcastLink();
        t.model.info();
        t.model.imageUrl();
        t.model.owner({ type: 'User' });
        t.model.categories({ type: 'Category' });
    },
});
var createPodcastInput = nexus_1.inputObjectType({
    name: 'createPodcastInput',
    definition: function (t) {
        t.nonNull.string('name');
        t.nonNull.string('podcastLink');
        t.string('info');
        t.string('imageUrl');
        t.list.string('categories');
    },
});
var createPodcast = nexus_1.mutationField('createPodcast', {
    type: Podcast,
    args: { input: createPodcastInput },
    resolve: function (parent, _a, _b, info) {
        var input = _a.input;
        var prisma = _b.prisma, user = _b.user;
        return __awaiter(void 0, void 0, void 0, function () {
            var _c, categories, rest, categoryIdList, podcast;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _c = input.categories, categories = _c === void 0 ? [] : _c, rest = __rest(input, ["categories"]);
                        categoryIdList = categories.map(function (id) { return ({
                            id: id,
                        }); });
                        return [4 /*yield*/, prisma.podcast.create({
                                data: __assign({ owner: {
                                        connect: {
                                            id: user.userId,
                                        },
                                    }, categories: {
                                        connect: categoryIdList,
                                    } }, rest),
                            })];
                    case 1:
                        podcast = _d.sent();
                        return [2 /*return*/, podcast];
                }
            });
        });
    },
});
var getAllPodcasts = nexus_1.queryField('getAllPodcasts', {
    type: nexus_1.list(Podcast),
    resolve: function (parent, args, context, info) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, context.prisma.podcast.findMany()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); },
});
var searchInput = nexus_1.inputObjectType({
    name: 'searchInput',
    definition: function (t) {
        t.string('searchQuery');
    },
});
var searchPodcasts = nexus_1.queryField('searchPodcasts', {
    type: nexus_1.list(Podcast),
    args: { input: searchInput },
    resolve: function (parent, _a, _b, info) {
        var input = _a.input;
        var prisma = _b.prisma;
        return __awaiter(void 0, void 0, void 0, function () {
            var _c, searchQuery, podcasts;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _c = input.searchQuery, searchQuery = _c === void 0 ? '' : _c;
                        return [4 /*yield*/, prisma.podcast.findMany({
                                where: {
                                    OR: [
                                        {
                                            name: {
                                                contains: searchQuery,
                                                mode: 'insensitive',
                                            },
                                        },
                                        {
                                            info: {
                                                contains: searchQuery,
                                                mode: 'insensitive',
                                            },
                                        },
                                    ],
                                },
                            })];
                    case 1:
                        podcasts = _d.sent();
                        return [2 /*return*/, podcasts];
                }
            });
        });
    },
});
exports.PodcastTypes = {
    Podcast: Podcast,
    createPodcastInput: createPodcastInput,
    createPodcast: createPodcast,
    getAllPodcasts: getAllPodcasts,
    searchInput: searchInput,
    searchPodcasts: searchPodcasts,
};
