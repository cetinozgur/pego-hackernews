import { Feed } from "@/features/stories/feed";
import { FeedTitle } from "@/features/stories/feed-title";

export const TopStoriesPage = () => {
  return (
    <>
      <FeedTitle title="Top Stories" />
      <Feed type="top" />
    </>
  );
};
