import { HackernewsDB } from "./datasources/db";
import { Resolvers } from "__generated__/resolvers-types";

export const resolvers: Resolvers = {
  Query: {
    feed: async (_, { feedType, offset, limit }, { dataSources }) => {
      const storyIds = await dataSources.hackernewsApi.getFeedIdsByType(feedType);

      const stories = await storyIds
        .slice(offset!, offset! + limit!)
        .map((id: number) => dataSources.hackernewsApi.getItemById(id));
      return stories;
    },
    author: async (_, { authorId }, { dataSources }) => {
      const author = dataSources.hackernewsApi.getUserById(authorId);
      return author;
    },
    feedLength: async (_, { feedType }, { dataSources }) => {
      const storyIds = await dataSources.hackernewsApi.getFeedIdsByType(feedType);
      return storyIds.length;
    },
    story: (_, { id }, { dataSources }) => {
      return dataSources.hackernewsApi.getItemById(id);
    },
    comments: async (_, { storyId }, { dataSources }) => {
      const commentIds = await dataSources.hackernewsApi.getItemCommentIds(storyId);
      const comments = await commentIds.map((id: number) =>
        dataSources.hackernewsApi.getItemById(id)
      );
      return comments;
    },
    getFavsOfUsers: async (_, { userEmail, offset, limit }, { dataSources }) => {
      const db = (dataSources.hackernewsdb = new HackernewsDB());

      db.connect();

      const result = await db.favorites.findOne({ email: userEmail });

      db.disconnect();

      const storyIds = result?.favorites || [];

      return storyIds
        .slice(offset!, offset! + limit!)
        .map((id: string) => dataSources.hackernewsApi.getItemById(id));
    },
    getFavsOfUsersLength: async (_, { userEmail }, { dataSources }) => {
      const db = (dataSources.hackernewsdb = new HackernewsDB());

      db.connect();

      const result = await db.favorites.findOne({ email: userEmail });

      db.disconnect();

      return result?.favorites.length || 0;
    },
    getIdsOfUsersFavs: async (_, { userEmail }, { dataSources }) => {
      const db = (dataSources.hackernewsdb = new HackernewsDB());

      db.connect();

      const result = await db.favorites.findOne({ email: userEmail });

      db.disconnect();

      return result?.favorites || [];
    },
  },

  Mutation: {
    addToFav: async (_, { userEmail, storyId }, { dataSources }) => {
      const db = (dataSources.hackernewsdb = new HackernewsDB());

      db.connect();

      const result = await db.favorites.findOne({ email: userEmail });

      if (result)
        await db.favorites.updateOne(
          { email: userEmail },
          { email: result.email, favorites: [...result.favorites, storyId] }
        );
      else await db.favorites.create({ email: userEmail, favorites: [storyId] });

      db.disconnect();

      return "success";
    },
    removeFromFav: async (_, { userEmail, storyId }, { dataSources }) => {
      const db = (dataSources.hackernewsdb = new HackernewsDB());

      db.connect();

      const result = await db.favorites.findOne({ email: userEmail });

      const favIds = result?.favorites;

      if (result && favIds?.includes(storyId)) {
        const indexToRemove = favIds.indexOf(storyId);
        favIds.splice(indexToRemove, 1);

        await db.favorites.updateOne(
          { email: userEmail },
          { email: result.email, favorites: favIds }
        );
      }

      db.disconnect();

      return "success";
    },
    removeAllFav: async (_, { userEmail }, { dataSources }) => {
      const db = (dataSources.hackernewsdb = new HackernewsDB());

      db.connect();

      const result = await db.favorites.findOne({ email: userEmail });

      const favIds = result?.favorites;

      favIds?.splice(0, favIds.length);

      if (result) {
        favIds?.splice(0, favIds.length);

        await db.favorites.updateOne(
          { email: userEmail },
          { email: result.email, favorites: favIds }
        );
      }

      db.disconnect();

      return "success";
    },
  },

  Story: {
    // Gets the top level comment of story
    kids: async ({ kids: commentIds }, _, { dataSources }, __) => {
      if (commentIds && commentIds.length > 0) {
        return commentIds.map((id) => dataSources.hackernewsApi.getItemById(id));
      } else {
        return [];
      }
    },
  },
};
