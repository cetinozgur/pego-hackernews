import { Layout } from "@/components";
import { Feed } from "@/features/stories/feed";

export const BestStoriesPage = () => {
  return (
    <Layout>
      <Feed type="best" />
    </Layout>
  );
};
