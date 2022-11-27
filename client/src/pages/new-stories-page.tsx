import { Layout } from "@/components";
import { Feed } from "@/features/stories/feed";

export const NewStoriesPage = () => {
  return (
    <Layout>
      <Feed type="new" />
    </Layout>
  );
};
