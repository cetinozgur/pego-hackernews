import { PageLoading } from "@/components";
import { useQuery } from "@apollo/client";
import { GET_STORIES_BY_TYPE } from "./queries";
import { setAlert } from "@/redux/alert-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Divider } from "rsuite";
import styled from "styled-components";
import { useState } from "react";
import { timeDifferenceForDate } from "@/utils/time-converter";

export const Feed = ({ type }: { type: string }) => {
  const dispatch = useAppDispatch();
  const [limit, setLimit] = useState(10);
  const theme = useAppSelector((state) => state.theme.value);
  const { loading, data, error, fetchMore } = useQuery(GET_STORIES_BY_TYPE, {
    variables: {
      offset: 0,
      limit,
      storyType: type,
    },
    // notifyOnNetworkStatusChange: true,
  });

  const loadMore = () => {
    const currentLength = data.stories.length;
    fetchMore({
      variables: {
        offset: currentLength,
        limit,
      },
    }).then((fetchMoreResult) => {
      setLimit(currentLength + fetchMoreResult.data.stories.length);
    });
  };

  if (loading) {
    return <PageLoading desc="loading stories.." />;
  }

  if (error) {
    dispatch(setAlert({ type: "error", message: error.message }));
  }

  return (
    <Container>
      <FeedGrid>
        {data?.stories.map((story: any, index: number) => {
          return (
            <FeedItem key={story.id} className={theme}>
              <Title href={story.url ? story.url : "#"} target="_blank" className={theme}>
                {index + 1}
                <Divider vertical />
                {story.title}
              </Title>
              <Details>
                <DetailText className={theme}>{story.score} likes</DetailText>
                <Divider vertical />
                <DetailLink className={theme}>by {story.by.id}</DetailLink>
                <Divider vertical />
                <DetailText className={theme}>{timeDifferenceForDate(story.time)}</DetailText>
                <Divider vertical />
                <DetailLink className={theme}>{story.descendants} comments</DetailLink>
              </Details>
            </FeedItem>
          );
        })}
      </FeedGrid>
      <LoadMore onClick={loadMore}>LOAD MORE</LoadMore>
    </Container>
  );
};

// Styles
const Container = styled.div`
  /* overflow-y: scroll;
  overflow-x: hidden;
  max-height: 100%; */
`;

const FeedGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FeedItem = styled.div`
  padding: 0.5rem;
  border: 1px solid #8d919b;
  border-radius: 5px;

  &.light {
    background-color: #f6f6f6;
  }
`;

const Title = styled.a`
  cursor: pointer;

  &.dark {
    color: #ededef;
  }

  &.light {
    color: #1a1d24;
  }
`;

const Details = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 0.5rem;
  font-size: smaller;
`;

const DetailLink = styled.a`
  cursor: pointer;

  &.dark {
    color: #a7a9af;
  }

  &.light {
    color: #6e6e6e;
  }
`;

const DetailText = styled.p`
  &.dark {
    color: #a7a9af;
  }
`;

const LoadMore = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  font-size: large;
  color: #a7a9af;

  &:hover {
    cursor: pointer;
  }
`;
