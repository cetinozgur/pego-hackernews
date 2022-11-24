"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryAPI = void 0;
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
class StoryAPI extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://hacker-news.firebaseio.com/v0/";
    }
    getTopStoryIds() {
        return this.get("topstories.json");
    }
    getItemById(storyId) {
        return this.get(`item/${storyId}.json`);
    }
    getAuthorByName(userId) {
        return this.get(`user/${userId}.json`);
    }
}
exports.StoryAPI = StoryAPI;
//# sourceMappingURL=story-api.js.map