import { PageLoading } from "@/components";
import { useQuery } from "@apollo/client";
import { GET_FEED_BY_TYPE, GET_FEED_LENGTH_BY_TYPE } from "../../queries";
import { setAlert } from "@/redux/alert-slice";
import { useAppDispatch } from "@/redux/hooks";
import styled from "styled-components";
import { FeedItem } from "./feed-item";
import type { Story as StoryType } from "@/gql/graphql";
import { Button } from "rsuite";
import { LoadMore } from "./load-more";

export enum FeedType {
  TOP = "top",
  BEST = "best",
  NEW = "new",
}

interface FeedProps {
  type: FeedType;
}

export const Feed = ({ type }: FeedProps) => {
  const limit = 20;
  const dispatch = useAppDispatch();
  const { data: lengthData } = useQuery(GET_FEED_LENGTH_BY_TYPE, {
    variables: { feedType: type },
  });
  const { loading, data, error, fetchMore } = useQuery(GET_FEED_BY_TYPE, {
    variables: {
      offset: 0,
      limit,
      feedType: type,
    },
  });

  // To keep track of the remainder feed items & setting offset when loading more
  const currentFeedLength = data?.feed.length;
  const feedLength = lengthData?.feedLength;

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

    return <p>No stories.</p>;
  }

  // Fetches more according to offset, limit and current length of extracted data length
  const loadMore = () => {
    fetchMore({
      variables: {
        offset: currentFeedLength,
        limit,
      },
    });
  };

  return (
    <FeedGrid>
      {data?.feed.map((story: StoryType, index: number) => {
        return <FeedItem isUserFav={true} story={story} index={index} key={story.id} />;
      })}
      {data && (
        <LoadMore
          totalFeedLength={feedLength}
          currentFeedLength={currentFeedLength}
          loadMore={loadMore}
        />
      )}
    </FeedGrid>
  );
};

// Styles
const FeedGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
