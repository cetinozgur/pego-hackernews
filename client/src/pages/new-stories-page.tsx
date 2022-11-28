import { Feed } from "@/features/stories/feed";
import { FeedTitle } from "@/features/stories/feed-title";
import { Fragment } from "react";

export const NewStoriesPage = () => {
  return (
    <>
      <FeedTitle title="New Stories" />
      <Feed type="new" />;
    </>
  );
};
