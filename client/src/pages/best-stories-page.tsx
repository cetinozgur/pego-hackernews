import { Feed } from "@/features/stories/feed";
import { FeedTitle } from "@/features/stories/feed-title";

export const BestStoriesPage = () => {
  return (
    <>
      <FeedTitle title="Best Stories" />
      <Feed type="best" />
    </>
  );
};
