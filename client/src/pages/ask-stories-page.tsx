import { Feed } from "@/features/stories/feed";
import { FeedTitle } from "@/features/stories/feed-title";
import { FeedType } from "@/features/stories/feed";
import { useAuth0 } from "@auth0/auth0-react";

export const AskStoriesPage = () => {
  const { user } = useAuth0();

  return (
    <>
      {user?.email && (
        <>
          <FeedTitle title="Ask Stories" />
          <Feed userEmail={user?.email} type={FeedType.ASK} />
        </>
      )}
    </>
  );
};
