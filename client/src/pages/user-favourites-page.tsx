import { Feed } from "@/features/stories/feed";
import { FeedTitle } from "@/features/stories/feed-title";
import { useAuth0 } from "@auth0/auth0-react";

export const UserFavouritesPage = () => {
  const { user } = useAuth0();

  return (
    <>
      {user?.email && (
        <>
          <FeedTitle title="Your favourites" />
          <Feed userEmail={user?.email} />
        </>
      )}
    </>
  );
};
