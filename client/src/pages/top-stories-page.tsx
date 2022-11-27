import { Layout } from "@/components";
import { Feed } from "@/features/stories/feed-grid";

export const TopStoriesPage = () => {
  return (
    <Layout>
      <Feed type="top" />
    </Layout>
  );
};
