import { RESTDataSource } from "apollo-datasource-rest";
import { Story } from "__generated__/resolvers-types";

export class StoryAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://hacker-news.firebaseio.com/v0/";
  }
  async getTopStoryIds() {
    return this.get("topstories.json");
  }
  async getItemById(storyId: unknown) {
    return this.get(`item/${storyId}.json`);
  }
  async getUserByName(userId: unknown) {
    return this.get(`user/${userId}.json`);
  }
}
