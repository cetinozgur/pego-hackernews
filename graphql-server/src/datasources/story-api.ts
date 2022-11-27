import { RESTDataSource } from "apollo-datasource-rest";

export class StoryAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://hacker-news.firebaseio.com/v0/";
  }

  async getTopStoryIds() {
    return await this.get("topstories.json");
  }

  async getBestStoryIds() {
    return await this.get("beststories.json");
  }

  async getNewStoryIds() {
    return await this.get("newstories.json");
  }

  async getItemById(id: any) {
    return await this.get(`item/${id}.json`);
  }

  async getUserByName(id: any) {
    return await this.get(`user/${id}.json`);
  }
}
