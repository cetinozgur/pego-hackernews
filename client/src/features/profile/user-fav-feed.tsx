import { PageLoading } from "@/components";
import { GET_USER_FAVS } from "@/queries";
import { setAlert } from "@/redux/alert-slice";
import { useAppDispatch } from "@/redux/hooks";
import { useQuery } from "@apollo/client";
import { type } from "@testing-library/user-event/dist/type";
import styled from "styled-components";
import { FeedItem } from "../stories/feed-item";
import type { Story as StoryType } from "@/gql/graphql";

export const UserFavFeed = ({ userEmail }: { userEmail: string }) => {
  const limit = 20; // pagination limit
  const dispatch = useAppDispatch();
  const { loading, data, error, fetchMore } = useQuery(GET_USER_FAVS, {
    variables: {
      offset: 0,
      limit,
      userEmail,
    },
  });

  if (loading) {
    return <PageLoading desc="loading stories.." />;
  }

  if (error) {
    dispatch(
      setAlert({
        type: "error",
        message: `Can't load the stories at the moment. Details: ${error.message}`,
      })
    );
  }

  const loadMore = () => {
    const currentLength = data.stories.length;
    fetchMore({
      variables: {
        offset: currentLength,
        limit,
      },
    });
  };

  return (
    <Container>
      <FeedGrid>
        {data?.stories.map((story: StoryType, index: number) => {
          return <FeedItem story={story} index={index} key={story.id} />;
        })}
      </FeedGrid>
      <LoadMore onClick={loadMore}>Load more</LoadMore>
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

const LoadMore = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  font-size: larger;
  color: #a7a9af;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`;
