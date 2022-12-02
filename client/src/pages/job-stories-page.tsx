import { Feed } from "@/features/stories/feed";
import { FeedTitle } from "@/features/stories/feed-title";
import { FeedType } from "@/features/stories/feed";
import { useAuth0 } from "@auth0/auth0-react";

export const JobStoriesPage = () => {
  const { user } = useAuth0();

  return (
    <>
      {user?.email && (
        <>
          <FeedTitle title="Job Stories" />
          <Feed userEmail={user?.email} type={FeedType.JOB} />
        </>
      )}
    </>
  );
};
