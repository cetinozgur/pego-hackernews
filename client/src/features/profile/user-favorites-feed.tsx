import { PageLoading } from "@/components";
import { GET_FAVS_OF_USERS, GET_USER_FAVS_FEED_LENGTH } from "@/queries";
import { setAlert } from "@/redux/alert-slice";
import { useAppDispatch } from "@/redux/hooks";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { FeedItem } from "../stories/feed-item";
import type { Story as StoryType } from "@/gql/graphql";
import { LoadMore } from "../stories/load-more";
import { RemoveAllFavorites } from "../stories/remove-all-favs";
import { Nav } from "rsuite";

export const UserFavoritesFeed = ({ userEmail }: { userEmail: string }) => {
  const limit = 10;
  const dispatch = useAppDispatch();
  const { data: lengthData } = useQuery(GET_USER_FAVS_FEED_LENGTH, {
    variables: { userEmail },
  });
  const { loading, data, error, fetchMore } = useQuery(GET_FAVS_OF_USERS, {
    variables: {
      userEmail,
      offset: 0,
      limit,
    },
  });

  // To keep track of the remainder feed items & setting offset when loading more
  const currentFeedLength = data?.getFavsOfUsers.length;
  const feedLength = lengthData?.getFavsOfUsersLength;

  if (loading) {
    return <PageLoading desc="loading stories.." />;
  }

  if (error) {
    dispatch(
      setAlert({
        type: "error",
        message: `Can't load the stories at the moment.`,
      })
    );
    console.log(error);
  }

  console.log(data);

  const loadMore = () => {
    fetchMore({
      variables: {
        offset: currentFeedLength,
        limit,
      },
    });
  };

  return (
    <Container>
      {/* <Nav>
        <Nav.Item>Default Item</Nav.Item>
        <Nav.Item active>Active Item</Nav.Item>
        <Nav.Item disabled>Disabled Item</Nav.Item>
      </Nav> */}
      <RemoveAllFavorites lengthOfFavs={data?.getFavsOfUsers} />
      <FeedGrid>
        {data?.getFavsOfUsers?.map((story: StoryType, index: number) => {
          return story && <FeedItem isUsersFav={true} story={story} index={index} key={story.id} />;
        })}
      </FeedGrid>
      {data && (
        <LoadMore
          totalFeedLength={feedLength}
          currentFeedLength={currentFeedLength}
          loadMore={loadMore}
        />
      )}
    </Container>
  );
};

// Styles
const Container = styled.div``;

const FeedGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
