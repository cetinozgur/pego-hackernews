import { RESTDataSource } from "apollo-datasource-rest";
import { Story } from "__generated__/resolvers-types";

export class StoryAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://hacker-news.firebaseio.com/v0/";
  }

  getTopStoryIds() {
    return this.get("topstories.json");
  }

  getBestStoryIds() {
    return this.get("beststories.json");
  }

  getNewStoryIds() {
    return this.get("newstories.json");
  }

  async getItemById(storyId: number) {
    return this.get(`item/${storyId}.json`);
  }

  getUserByName(userId: string) {
    return this.get(`user/${userId}.json`);
  }
}
