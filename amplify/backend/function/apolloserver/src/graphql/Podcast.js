"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PodcastTypes = void 0;
var nexus_1 = require("nexus");
var Podcast = nexus_1.objectType({
    name: 'Podcast',
    definition: function (t) {
        t.model.id();
        t.model.name();
        t.model.info();
        t.model.podcastLink();
        t.model.imageUrl();
        t.model.owner();
        t.model.categories();
    },
});
exports.PodcastTypes = { Podcast: Podcast };
