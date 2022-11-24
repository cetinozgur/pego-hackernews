import { StoryAPI } from "./datasources/story-api";

export const storyApi = new StoryAPI();

export interface Context {
  storyApi: StoryAPI;
}
