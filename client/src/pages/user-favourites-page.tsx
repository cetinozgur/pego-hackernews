import { UserFeed } from "@/features/profile/user-feed";
import { FeedTitle } from "@/features/stories/feed-title";
import { useAuth0 } from "@auth0/auth0-react";

export const UserFavouritesPage = () => {
  const { user } = useAuth0();

  console.log(user);

  return (
    <>
      {user?.email && (
        <>
          <FeedTitle title="Your favourites" />
          <UserFeed userEmail={user.email} />
        </>
      )}
    </>
  );
};
