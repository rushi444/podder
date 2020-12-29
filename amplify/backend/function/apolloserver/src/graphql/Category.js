"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryTypes = void 0;
var nexus_1 = require("nexus");
var Category = nexus_1.objectType({
    name: 'Category',
    definition: function (t) {
        t.model.id();
        t.model.name();
        t.model.podcasts();
    },
});
exports.CategoryTypes = { Category: Category };
