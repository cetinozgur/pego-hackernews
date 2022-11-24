import { RESTDataSource } from "apollo-datasource-rest";

export class StoryAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://hacker-news.firebaseio.com/v0/";
  }
  getTopStoryIds() {
    return this.get("topstories.json");
  }
  getItemById(storyId: number) {
    return this.get(`item/${storyId}.json`);
  }
  getAuthorByName(userId: string) {
    return this.get(`user/${userId}.json`);
  }
}
